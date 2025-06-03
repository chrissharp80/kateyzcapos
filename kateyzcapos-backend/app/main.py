from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uuid
from datetime import datetime

app = FastAPI(title="Kat Eyz Capos API")

# Disable CORS. Do not remove this for full-stack development.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

capo_products_db = [
    {
        "id": "1",
        "name": "Steampunk Guitar Capo",
        "description": "Close up of Steampunk. Stainless fretbar and screw, Brass frame, Copper saddle, thumbscrew and fretbar clasp. Handcrafted with unique V-shaped design for optimal string pressure and tone preservation.",
        "price": 85.00,
        "image": "https://lh5.googleusercontent.com/FHpVH8sJWdq2aZpPGADqFPNcfS9Oq9XdYFKSX_SYkRTO-4P-gxposDH36OqOR5ylqfgrmBpXvlbZvwpVY17LIVPCjBBTAxnp3BIdWhn6JtYzsrSYORA5oEctt__2E1wQ=w1280",
        "category": "Steampunk",
        "stock": 10
    },
    {
        "id": "2",
        "name": "Brass Guitar Capo",
        "description": "Brass guitar with old style 1/4 thumbscrew. Premium brass capo with precision machining and lifetime guarantee. Perfect for classical and acoustic guitars.",
        "price": 75.00,
        "image": "https://lh6.googleusercontent.com/wNZ_BSfoVXsIizwcwRdeceoEndoYHxYjoqs1bdtvGq5d55qIwQR74-qZV_0JBdkcKq72h6e-FkB4UUfgO6e5KsMaLgWm0v7ISlusBTsj6DrrojEB=w1280",
        "category": "Brass",
        "stock": 15
    },
    {
        "id": "3",
        "name": "Stainless Steel Guitar Capo",
        "description": "Stainless steel Guitar 2.0 capo with new style 1/4 thumbscrew. Durable stainless steel construction with knurled thumbscrew for precise tension control.",
        "price": 70.00,
        "image": "https://lh4.googleusercontent.com/CJbuH4wBcy14Dv41wNEDAfNCvDzRtS7jIbC8uWYwWleZJ7x6rpyGfCQIk-4FMYOMQUaBNxjgBlK4ZEWtuFCpdZvbBfFHsJrLzxowCpZlGFmq17QyfkLkmxyUNrUGQUrXsQ=w1280",
        "category": "Stainless Steel",
        "stock": 12
    },
    {
        "id": "4",
        "name": "Copper Banjo Capo",
        "description": "Copper banjo B with old style 3/8 thumbscrew. Specially designed for banjos with custom sizing available. Beautiful copper finish with old-style thumbscrew.",
        "price": 80.00,
        "image": "https://lh6.googleusercontent.com/TBc8Wnwr3NaO7oDE5CQzqp_SKVoimX7pXcuThHX_vqx8BhsLH30s-nXREi0ehh3V4grA8GnFdDIoWDudeIKr7iJtXwxpLCbyXOMAjXalmUAkiB3t=w1280",
        "category": "Copper",
        "stock": 8
    }
]

carts_db = {}
orders_db = {}

class Product(BaseModel):
    id: str
    name: str
    description: str
    price: float
    image: str
    category: str
    stock: int

class CartItem(BaseModel):
    product_id: str
    quantity: int
    customizations: Optional[str] = None

class Cart(BaseModel):
    id: str
    items: List[CartItem]
    created_at: datetime

class OrderItem(BaseModel):
    product_id: str
    product_name: str
    price: float
    quantity: int
    customizations: Optional[str] = None

class Order(BaseModel):
    id: str
    items: List[OrderItem]
    total: float
    customer_email: str
    status: str
    created_at: datetime

class CreateOrderRequest(BaseModel):
    cart_id: str
    customer_email: str

@app.get("/healthz")
async def healthz():
    return {"status": "ok"}

@app.get("/")
def read_root():
    return {"message": "Kat Eyz Capos API", "version": "1.0.0"}

@app.get("/products", response_model=List[Product])
def get_products():
    return capo_products_db

@app.get("/products/{product_id}", response_model=Product)
def get_product(product_id: str):
    product = next((p for p in capo_products_db if p["id"] == product_id), None)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@app.post("/cart")
def create_cart():
    cart_id = str(uuid.uuid4())
    cart = {
        "id": cart_id,
        "items": [],
        "created_at": datetime.now()
    }
    carts_db[cart_id] = cart
    return {"cart_id": cart_id}

@app.get("/cart/{cart_id}")
def get_cart(cart_id: str):
    if cart_id not in carts_db:
        raise HTTPException(status_code=404, detail="Cart not found")
    
    cart = carts_db[cart_id]
    cart_with_details = {
        "id": cart["id"],
        "items": [],
        "total": 0
    }
    
    for item in cart["items"]:
        product = next((p for p in capo_products_db if p["id"] == item["product_id"]), None)
        if product:
            item_total = product["price"] * item["quantity"]
            cart_with_details["items"].append({
                "product_id": item["product_id"],
                "product_name": product["name"],
                "price": product["price"],
                "quantity": item["quantity"],
                "total": item_total,
                "image": product["image"],
                "customizations": item.get("customizations")
            })
            cart_with_details["total"] += item_total
    
    return cart_with_details

@app.post("/cart/{cart_id}/items")
def add_to_cart(cart_id: str, item: CartItem):
    if cart_id not in carts_db:
        raise HTTPException(status_code=404, detail="Cart not found")
    
    product = next((p for p in capo_products_db if p["id"] == item.product_id), None)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    
    if product["stock"] < item.quantity:
        raise HTTPException(status_code=400, detail="Insufficient stock")
    
    cart = carts_db[cart_id]
    existing_item = next((i for i in cart["items"] if i["product_id"] == item.product_id), None)
    
    if existing_item:
        existing_item["quantity"] += item.quantity
        if item.customizations:
            existing_item["customizations"] = item.customizations
    else:
        cart["items"].append({
            "product_id": item.product_id,
            "quantity": item.quantity,
            "customizations": item.customizations
        })
    
    return {"message": "Item added to cart"}

@app.delete("/cart/{cart_id}/items/{product_id}")
def remove_from_cart(cart_id: str, product_id: str):
    if cart_id not in carts_db:
        raise HTTPException(status_code=404, detail="Cart not found")
    
    cart = carts_db[cart_id]
    cart["items"] = [item for item in cart["items"] if item["product_id"] != product_id]
    
    return {"message": "Item removed from cart"}

@app.post("/orders")
def create_order(order_request: CreateOrderRequest):
    if order_request.cart_id not in carts_db:
        raise HTTPException(status_code=404, detail="Cart not found")
    
    cart = carts_db[order_request.cart_id]
    if not cart["items"]:
        raise HTTPException(status_code=400, detail="Cart is empty")
    
    order_id = str(uuid.uuid4())
    order_items = []
    total = 0
    
    for item in cart["items"]:
        product = next((p for p in capo_products_db if p["id"] == item["product_id"]), None)
        if product and product["stock"] >= item["quantity"]:
            item_total = product["price"] * item["quantity"]
            order_items.append({
                "product_id": item["product_id"],
                "product_name": product["name"],
                "price": product["price"],
                "quantity": item["quantity"],
                "customizations": item.get("customizations")
            })
            total += item_total
            product["stock"] -= item["quantity"]
    
    total += 7.00
    
    order = {
        "id": order_id,
        "items": order_items,
        "total": total,
        "customer_email": order_request.customer_email,
        "status": "confirmed",
        "created_at": datetime.now()
    }
    
    orders_db[order_id] = order
    carts_db[order_request.cart_id]["items"] = []
    
    return {"order_id": order_id, "total": total, "status": "confirmed"}

@app.get("/orders/{order_id}")
def get_order(order_id: str):
    if order_id not in orders_db:
        raise HTTPException(status_code=404, detail="Order not found")
    return orders_db[order_id]

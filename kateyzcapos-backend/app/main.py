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
        "id": "steampunk-guitar",
        "name": "Steampunk Guitar Capo",
        "description": "Close up of Steampunk. Stainless fretbar and screw, Brass frame, Copper saddle, thumbscrew and fretbar clasp. Mixed metals design with unique V-shaped saddle for superior stability and intonation.",
        "price": 105.00,
        "image": "https://lh6.googleusercontent.com/7ztv6OURiA0bEBzLv7pj-6PSmPeeO9KHACHdZkSjMgGbBCYf8U3p3tXcHWUBSfP9o3gXy7OiihHV_Sig7W5jHsN-FFB6nF5_4kWsuZT9fZivgc0JkXnUMJSpKvZO6QQb=w1280",
        "category": "Guitar",
        "metal": "Steampunk",
        "thumbscrew_size": "1/4\"",
        "thumbscrew_style": "new",
        "stock": 5
    },
    {
        "id": "brass-guitar-old-quarter",
        "name": "Brass Guitar Capo (Old Style 1/4\")",
        "description": "Brass guitar with old style 1/4 thumbscrew. Premium polished brass construction with precision machining and lifetime guarantee. Perfect for classical and acoustic guitars.",
        "price": 105.00,
        "image": "https://lh4.googleusercontent.com/m5XH-mUoR3ZNU0iwXeH6UD2n9ebarI8j6NjetfdYrH6bcmDADYbip-Ny1XbruaptyeJIgXbbMJymQrMJFwPUTxs4DtXomMqNeim7Slj23xJ7SRCqPvUBqDJEgtKbAWRa-H44VHU2mRwN-c5v4GULKdxGd1ntzrKzGcXB=w1280",
        "category": "Guitar",
        "metal": "Brass",
        "thumbscrew_size": "1/4\"",
        "thumbscrew_style": "old",
        "stock": 8
    },
    {
        "id": "stainless-guitar-new-quarter",
        "name": "Stainless Steel Guitar 2.0 Capo (New Style 1/4\")",
        "description": "Stainless steel Guitar 2.0 capo with new style 1/4 thumbscrew. Durable polished stainless steel construction with knurled thumbscrew for precise tension control.",
        "price": 105.00,
        "image": "https://lh6.googleusercontent.com/he6HeZyBTFLkrSzLqp4rIVyLKpbmZMU5_r5UUJ_RMnFut_rrtRkozC4mx_VDKU-avLAz87Zhr1yf4wInRELUl8lS-rxD7iUu4b9cpujA0ky0k4HUAoAXNn-Gw4yQt3MRuA=w1280",
        "category": "Guitar",
        "metal": "Stainless Steel",
        "thumbscrew_size": "1/4\"",
        "thumbscrew_style": "new",
        "stock": 10
    },
    {
        "id": "copper-banjo-b-old-3-8",
        "name": "Copper Banjo B Capo (Old Style 3/8\")",
        "description": "Copper banjo B with old style 3/8 thumbscrew. Specially designed for banjos (1st-4th fret) with custom sizing available. Beautiful copper finish with old-style thumbscrew.",
        "price": 105.00,
        "image": "https://lh3.googleusercontent.com/hCOnuvIJjA3MFuc4EjZjLVEnjR4thkkynTRZUhE2jXTxMneA63GeA_dHK-YqDOu8a9OX_LUg08aXU17ECSi5aQHZTDE9RXyMELgK_uzC6P7Dv-pa=w1280",
        "category": "Banjo",
        "banjo_type": "B",
        "metal": "Copper",
        "thumbscrew_size": "3/8\"",
        "thumbscrew_style": "old",
        "stock": 6
    },
    {
        "id": "brass-banjo-b-new-quarter",
        "name": "Brass Banjo B Capo (New Style 1/4\")",
        "description": "Brass Banjo B with new style 1/4 thumbscrew. Polished brass construction designed for banjos (1st-4th fret) with precision V-shaped saddle design.",
        "price": 105.00,
        "image": "https://lh4.googleusercontent.com/m5XH-mUoR3ZNU0iwXeH6UD2n9ebarI8j6NjetfdYrH6bcmDADYbip-Ny1XbruaptyeJIgXbbMJymQrMJFwPUTxs4DtXomMqNeim7Slj23xJ7SRCqPvUBqDJEgtKbAWRa-H44VHU2mRwN-c5v4GULKdxGd1ntzrKzGcXB=w1280",
        "category": "Banjo",
        "banjo_type": "B",
        "metal": "Brass",
        "thumbscrew_size": "1/4\"",
        "thumbscrew_style": "new",
        "stock": 7
    },
    {
        "id": "copper-banjo-b-new-quarter",
        "name": "Copper Banjo B Capo (New Style 1/4\")",
        "description": "Copper Banjo B with new style 1/4 thumbscrew. Beautiful copper finish designed for banjos (1st-4th fret) with shorter knurled thumbscrew for improved playability.",
        "price": 105.00,
        "image": "https://lh3.googleusercontent.com/hCOnuvIJjA3MFuc4EjZjLVEnjR4thkkynTRZUhE2jXTxMneA63GeA_dHK-YqDOu8a9OX_LUg08aXU17ECSi5aQHZTDE9RXyMELgK_uzC6P7Dv-pa=w1280",
        "category": "Banjo",
        "banjo_type": "B",
        "metal": "Copper",
        "thumbscrew_size": "1/4\"",
        "thumbscrew_style": "new",
        "stock": 5
    },
    {
        "id": "brass-banjo-c-new-quarter",
        "name": "Brass Banjo C Capo (New Style 1/4\")",
        "description": "Brass Banjo C with new style 1/4 thumbscrew. Polished brass construction designed for banjo C tuning with precision machining and lifetime guarantee.",
        "price": 105.00,
        "image": "https://lh4.googleusercontent.com/m5XH-mUoR3ZNU0iwXeH6UD2n9ebarI8j6NjetfdYrH6bcmDADYbip-Ny1XbruaptyeJIgXbbMJymQrMJFwPUTxs4DtXomMqNeim7Slj23xJ7SRCqPvUBqDJEgtKbAWRa-H44VHU2mRwN-c5v4GULKdxGd1ntzrKzGcXB=w1280",
        "category": "Banjo",
        "banjo_type": "C",
        "metal": "Brass",
        "thumbscrew_size": "1/4\"",
        "thumbscrew_style": "new",
        "stock": 4
    },
    {
        "id": "gunmetal-guitar",
        "name": "Gunmetal Guitar Capo",
        "description": "Gunmetal finish guitar capo with unique dark metallic appearance. Precision machined with V-shaped saddle design for superior stability and tone preservation.",
        "price": 105.00,
        "image": "https://lh6.googleusercontent.com/he6HeZyBTFLkrSzLqp4rIVyLKpbmZMU5_r5UUJ_RMnFut_rrtRkozC4mx_VDKU-avLAz87Zhr1yf4wInRELUl8lS-rxD7iUu4b9cpujA0ky0k4HUAoAXNn-Gw4yQt3MRuA=w1280",
        "category": "Guitar",
        "metal": "Gunmetal",
        "thumbscrew_size": "1/4\"",
        "thumbscrew_style": "new",
        "stock": 3
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

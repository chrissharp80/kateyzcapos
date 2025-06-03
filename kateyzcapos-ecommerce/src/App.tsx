import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Plus, Minus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Home } from '@/pages/Home'
import { Products } from '@/pages/Products'
import { About } from '@/pages/About'
import { Contact } from '@/pages/Contact'
import { Product, CartItem } from '@/types'
import './App.css'

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [customerEmail, setCustomerEmail] = useState('')


  const capoProducts: Product[] = [
    {
      id: '1',
      name: 'Steampunk Guitar Capo',
      description: 'Handcrafted steampunk-style capo with unique V-shaped design for optimal string pressure and tone preservation.',
      price: 85.00,
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400',
      category: 'Steampunk',
      stock: 10
    },
    {
      id: '2',
      name: 'Brass Guitar Capo',
      description: 'Premium brass capo with precision machining and lifetime guarantee. Perfect for classical and acoustic guitars.',
      price: 75.00,
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400',
      category: 'Brass',
      stock: 15
    },
    {
      id: '3',
      name: 'Stainless Steel Capo',
      description: 'Durable stainless steel construction with knurled thumbscrew for precise tension control.',
      price: 70.00,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
      category: 'Stainless Steel',
      stock: 12
    },
    {
      id: '4',
      name: 'Copper Banjo Capo',
      description: 'Specially designed for banjos with custom sizing available. Beautiful copper finish with old-style thumbscrew.',
      price: 80.00,
      image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=400',
      category: 'Copper',
      stock: 8
    }
  ]

  useEffect(() => {
    setProducts(capoProducts)
  }, [])

  const addToCart = (product: Product, customizations?: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1, customizations }
            : item
        )
      }
      return [...prev, { product, quantity: 1, customizations }]
    })
  }

  const addToCartSimple = (product: Product) => {
    addToCart(product)
  }

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0) + 7.00
  }

  const handleCheckout = () => {
    alert(`Order confirmed for ${customerEmail}! Total: $${getTotalPrice().toFixed(2)} (includes $7.00 shipping)`)
    setCart([])
    setIsCheckoutOpen(false)
    setCustomerEmail('')
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header 
          cartItemCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
          onCartOpen={() => setIsCartOpen(true)}
        />
        
        <Routes>
          <Route path="/" element={<Home featuredProducts={products} onAddToCart={addToCartSimple} />} />
          <Route path="/products" element={<Products products={products} onAddToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

        <Dialog open={isCartOpen} onOpenChange={setIsCartOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Shopping Cart</DialogTitle>
              <DialogDescription>
                Review your items before checkout. Shipping is $7.00 USD for all orders.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 py-8">Your cart is empty</p>
              ) : (
                cart.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.product.name}</h4>
                      <p className="text-sm text-gray-600">${item.product.price.toFixed(2)} each</p>
                      {item.customizations && (
                        <p className="text-xs text-blue-600 mt-1">Custom: {item.customizations}</p>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      Remove
                    </Button>
                  </div>
                ))
              )}
            </div>
            {cart.length > 0 && (
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-semibold mb-4">
                  <span>Total (including $7.00 shipping):</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <Button
                  className="w-full"
                  onClick={() => {
                    setIsCartOpen(false)
                    setIsCheckoutOpen(true)
                  }}
                >
                  Proceed to Checkout
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Checkout</DialogTitle>
              <DialogDescription>
                Enter your email to complete your order. You'll receive order confirmation and tracking information.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="mt-2"
                />
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Order Summary</h4>
                {cart.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm mb-1">
                    <span>{item.product.name} x{item.quantity}</span>
                    <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="flex justify-between text-sm mb-1">
                  <span>Shipping</span>
                  <span>$7.00</span>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2">
                  <span>Total</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={handleCheckout}
                disabled={!customerEmail || cart.length === 0}
                className="w-full"
              >
                Complete Order
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </Router>
  )
}

export default App

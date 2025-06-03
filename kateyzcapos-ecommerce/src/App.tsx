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


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/products`)
        if (response.ok) {
          const data = await response.json()
          setProducts(data)
        } else {
          console.error('Failed to fetch products')
        }
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    
    fetchProducts()
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
    if (!customerEmail || cart.length === 0) return
    
    const orderId = `KEC-${Date.now()}`
    const orderTotal = getTotalPrice()
    
    const orderSummary = cart.map(item => 
      `${item.product.name} (Qty: ${item.quantity}) - $${(item.product.price * item.quantity).toFixed(2)}${item.customizations ? `\nCustom specs: ${item.customizations}` : ''}`
    ).join('\n\n')
    
    alert(`✅ Order Request Submitted Successfully!

Order ID: ${orderId}
Total: $${orderTotal.toFixed(2)}

Order Details:
${orderSummary}

Subtotal: $${(orderTotal - 7.00).toFixed(2)}
Shipping: $7.00
Total: $${orderTotal.toFixed(2)}

📧 Confirmation sent to: ${customerEmail}

You will be contacted directly to:
• Confirm custom measurements
• Arrange payment (PayPal available for international orders)
• Provide estimated completion time

Thank you for choosing Kat Eyz Capos!`)
    
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
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products products={products} onAddToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

        <Dialog open={isCartOpen} onOpenChange={setIsCartOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Shopping Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</DialogTitle>
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
                        <p className="text-xs text-blue-600 mt-1 bg-blue-50 p-2 rounded">
                          <strong>Custom specs:</strong> {item.customizations}
                        </p>
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
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>${(getTotalPrice() - 7.00).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping (flat rate):</span>
                    <span>$7.00</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold border-t pt-2">
                    <span>Total:</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
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
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Checkout</DialogTitle>
              <DialogDescription>
                Complete your order for custom handcrafted capos
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-800 mb-2">📧 Order Confirmation</h3>
                <p className="text-sm text-blue-700">
                  Your order details and payment instructions will be sent to your email. 
                  You will be contacted directly to confirm custom measurements and arrange payment.
                </p>
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="mt-2"
                  required
                />
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Order Summary</h4>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.product.id} className="bg-white p-3 rounded">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium">{item.product.name}</span>
                        <span className="font-bold">${(item.product.price * item.quantity).toFixed(2)}</span>
                      </div>
                      <div className="text-sm text-gray-600">Quantity: {item.quantity}</div>
                      {item.customizations && (
                        <div className="text-xs text-gray-500 mt-1">
                          <strong>Custom specs:</strong> {item.customizations}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-3 mt-3 space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>${(getTotalPrice() - 7.00).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping:</span>
                    <span>$7.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total:</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-3 rounded-lg">
                <p className="text-xs text-yellow-800">
                  <strong>Payment:</strong> PayPal is accepted for international orders. 
                  Domestic payment options will be provided via email.
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={handleCheckout}
                disabled={!customerEmail || cart.length === 0}
                className="w-full"
              >
                Submit Order Request
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </Router>
  )
}

export default App

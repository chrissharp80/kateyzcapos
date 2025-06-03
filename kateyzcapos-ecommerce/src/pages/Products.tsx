import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Product } from '@/types'

interface ProductsProps {
  products: Product[]
  onAddToCart: (product: Product, customizations?: string) => void
}

export function Products({ products, onAddToCart }: ProductsProps) {
  const [customizations, setCustomizations] = useState('')

  console.log('🎯 Products component received:', products.length, 'products')
  console.log('💰 First product price:', products[0]?.price)

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">Our Capo Collection</h1>
        <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Each capo is individually machined with precision and care. Choose from our selection of premium materials 
          and add custom specifications for your instrument.
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12 max-w-4xl mx-auto">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-lg font-medium text-yellow-800">Important: Custom Sizing Required</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p className="mb-2">To properly size a capo you will need to provide the following 3 types of dimensions (as close as you are able to measure in mm/in):</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Width of fretboard</strong> - Width of the fretboard at the highest capoed fret (side to side of fretboard)</li>
                  <li><strong>Depth of neck</strong> - Thickness of neck at volute, first fret, and highest capoed fret (top of unfretted strings to back of neck)</li>
                  <li><strong>Radius of fret board</strong> (if any)</li>
                </ul>
                <p className="mt-2 font-medium">Most capos are made at time of ordering due to custom sizing. This may affect completion time.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription className="text-sm">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</span>
                  <Badge variant="secondary">{product.category}</Badge>
                </div>
                <p className="text-sm text-gray-600">Stock: {product.stock} available</p>
              </CardContent>
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">Add to Cart</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Customize Your {product.name}</DialogTitle>
                      <DialogDescription>
                        Add any special sizing requirements or customizations below.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="customizations">Custom Measurements &amp; Special Requests</Label>
                        <Textarea
                          id="customizations"
                          placeholder="Required measurements:&#10;• Fretboard width at highest capoed fret (mm/in)&#10;• Neck depth at volute, first fret, and highest capoed fret (mm/in)&#10;• Fret board radius (if any)&#10;• Thumbscrew preferences (1/4&quot; or 3/8&quot;, old or new style)&#10;• Any other special requirements..."
                          value={customizations}
                          onChange={(e) => setCustomizations(e.target.value)}
                          className="mt-2 h-32"
                        />
                      </div>
                      <div className="bg-blue-50 p-3 rounded-md">
                        <p className="text-sm text-blue-800 font-medium">
                          📏 Precise measurements are critical for proper fit!
                        </p>
                        <p className="text-xs text-blue-600 mt-1">
                          Each capo is machined to your exact specifications. Inaccurate measurements may result in poor fit.
                        </p>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        onClick={() => {
                          onAddToCart(product, customizations)
                          setCustomizations('')
                        }}
                      >
                        Add to Cart - ${product.price.toFixed(2)}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

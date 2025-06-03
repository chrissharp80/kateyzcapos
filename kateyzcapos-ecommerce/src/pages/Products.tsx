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

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">Our Capo Collection</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Each capo is individually machined with precision and care. Choose from our selection of premium materials 
          and add custom specifications for your instrument.
        </p>
        
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
                          placeholder="Enter fretboard width, neck depth, thumbscrew preferences, or any special requirements..."
                          value={customizations}
                          onChange={(e) => setCustomizations(e.target.value)}
                          className="mt-2"
                        />
                      </div>
                      <p className="text-sm text-gray-600">
                        Most capos are made at time of ordering due to custom sizing. This may affect completion time.
                      </p>
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

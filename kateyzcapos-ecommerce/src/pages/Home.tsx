
import { Link } from 'react-router-dom'
import { Star, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Product } from '@/types'

interface HomeProps {
  featuredProducts: Product[]
  onAddToCart: (product: Product) => void
}

export function Home({ featuredProducts, onAddToCart }: HomeProps) {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Precision Handcrafted Guitar Capos</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Each capo is individually machined with a unique V-shaped design that provides optimal string pressure 
            while preserving your guitar's natural tone. Lifetime guarantee on all products.
          </p>
          <div className="flex justify-center space-x-8 text-sm mb-8">
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-2" />
              Lifetime Guarantee
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              Custom Sizing Available
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              Handmade in USA
            </div>
          </div>
          <Link to="/products">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Shop Our Collection
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Featured Capos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.slice(0, 4).map((product) => (
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
                  <Button 
                    className="w-full" 
                    onClick={() => onAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Kat Eyz Capos
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Handcrafted precision guitar and banjo capos featuring the unique V-shaped design 
            for superior stability, less tension, and perfect intonation. Each capo is individually 
            machined and guaranteed for life.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/products">
              <Button size="lg" className="text-lg px-8 py-3">
                Shop Collection
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Capo Benefits</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              The Kat Eyz Capo unique design give players more stability, with less tension, for better intonation. 
              The V-shaped saddle provides two anchor points on the neck promoting a self-aligning characteristic 
              as well as cutting pinpoint pressure IN HALF compared to other capo designs using a single contact 
              point on the neck. Additionally, the use of a thinner diameter fretbar lessens the risk of intonation 
              issues when using this capo. As always, the ability for Kat Eyz capos to match any radius exactly 
              requires a minimal amount of tension needed to fret the strings without buzzing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Capo Construction</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              The Kat Eyz Capos are handmade to a level of high precision. Every part of a capo is machined 
              in our shop right down to the knurled screws and stainless hinge pins. Machining jigs for all 
              milling/lathe processes, as well as finely adjusted forming plates, make each capo a repeatable 
              and precise accessory. All workmanship is guaranteed for life!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Capo Metals</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg text-amber-600">Brass</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Polished brass finish with warm, classic appearance</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg text-gray-600">Stainless Steel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Durable stainless steel with modern, sleek look</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg text-orange-600">Copper</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Rich copper finish with unique patina development</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg text-purple-600">Steampunk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Mixed metals: brass, stainless steel, and copper</p>
              </CardContent>
            </Card>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              These banjo and guitar capos are offered in polished BRASS, polished STAINLESS STEEL, 
              and STEAMPUNK (uses all three metals, Brass, Stainless, and Copper) and now GUNMETAL!!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Custom Work</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Since every capo is made personally in our shop, we are able to handle custom width and depth 
              capos for the same price as standard! Just e-mail us separately prior to ordering for anything 
              capos that are not a part of our standard product lines. For further attention to individual 
              customer needs, we also offer the option of a 1/4" or 3/8" thumbscrew (see gallery picture of difference).
            </p>
            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8 py-3">
                  Request Custom Capo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join countless musicians who trust Kat Eyz Capos for their precision, durability, and superior performance.
          </p>
          <Link to="/products">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

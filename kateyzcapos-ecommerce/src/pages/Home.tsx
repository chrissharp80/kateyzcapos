
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { Star, Award, Wrench, Zap } from 'lucide-react'

export function Home() {
  return (
    <div>
      {/* Hero Section with Featured Capo Images */}
      <section className="relative bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Kat Eyz Capos
                <span className="block text-3xl font-normal text-amber-200 mt-2">
                  Precision. Performance. Perfection.
                </span>
              </h1>
              <p className="text-xl mb-8 text-amber-100 leading-relaxed">
                Experience the revolutionary V-shaped design that delivers superior stability, 
                reduced tension, and flawless intonation. Each capo is individually machined 
                to perfection and guaranteed for life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button size="lg" className="text-lg px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white">
                    Shop Collection
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-amber-200 text-amber-200 hover:bg-amber-200 hover:text-amber-900">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform rotate-3 hover:rotate-0 transition-transform">
                  <img 
                    src="https://lh6.googleusercontent.com/7ztv6OURiA0bEBzLv7pj-6PSmPeeO9KHACHdZkSjMgGbBCYf8U3p3tXcHWUBSfP9o3gXy7OiihHV_Sig7W5jHsN-FFB6nF5_4kWsuZT9fZivgc0JkXnUMJSpKvZO6QQb=w1280"
                    alt="Steampunk Guitar Capo"
                    className="w-full h-32 object-cover rounded"
                  />
                  <p className="text-amber-200 text-sm mt-2 font-medium">Steampunk Mixed Metals</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform -rotate-2 hover:rotate-0 transition-transform">
                  <img 
                    src="https://lh6.googleusercontent.com/he6HeZyBTFLkrSzLqp4rIVyLKpbmZMU5_r5UUJ_RMnFut_rrtRkozC4mx_VDKU-avLAz87Zhr1yf4wInRELUl8lS-rxD7iUu4b9cpujA0ky0k4HUAoAXNn-Gw4yQt3MRuA=w1280"
                    alt="Stainless Steel Guitar Capo"
                    className="w-full h-32 object-cover rounded"
                  />
                  <p className="text-amber-200 text-sm mt-2 font-medium">Stainless Steel Precision</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform -rotate-1 hover:rotate-0 transition-transform">
                  <img 
                    src="https://lh4.googleusercontent.com/m5XH-mUoR3ZNU0iwXeH6UD2n9ebarI8j6NjetfdYrH6bcmDADYbip-Ny1XbruaptyeJIgXbbMJymQrMJFwPUTxs4DtXomMqNeim7Slj23xJ7SRCqPvUBqDJEgtKbAWRa-H44VHU2mRwN-c5v4GULKdxGd1ntzrKzGcXB=w1280"
                    alt="Brass Guitar Capo"
                    className="w-full h-32 object-cover rounded"
                  />
                  <p className="text-amber-200 text-sm mt-2 font-medium">Classic Brass Elegance</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform rotate-2 hover:rotate-0 transition-transform">
                  <img 
                    src="https://lh3.googleusercontent.com/hCOnuvIJjA3MFuc4EjZjLVEnjR4thkkynTRZUhE2jXTxMneA63GeA_dHK-YqDOu8a9OX_LUg08aXU17ECSi5aQHZTDE9RXyMELgK_uzC6P7Dv-pa=w1280"
                    alt="Copper Banjo Capo"
                    className="w-full h-32 object-cover rounded"
                  />
                  <p className="text-amber-200 text-sm mt-2 font-medium">Copper Banjo Warmth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Musicians Choose Kat Eyz</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <Zap className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">V-Shaped Innovation</h3>
              <p className="text-gray-600">Revolutionary dual anchor point design cuts pressure in half while improving stability</p>
            </div>
            <div className="text-center group">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <Wrench className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Precision Machined</h3>
              <p className="text-gray-600">Every component crafted in-house with aerospace-level precision and attention to detail</p>
            </div>
            <div className="text-center group">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lifetime Guarantee</h3>
              <p className="text-gray-600">Unmatched quality backed by our lifetime workmanship guarantee</p>
            </div>
            <div className="text-center group">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <Star className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Sizing</h3>
              <p className="text-gray-600">Perfect fit for any instrument with custom measurements at no extra cost</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capo Benefits - Enhanced Visual Design */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Science Behind Superior Performance</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our revolutionary V-shaped design transforms your playing experience
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-amber-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 Dual Anchor Point System</h3>
                <p className="text-gray-700">
                  The V-shaped saddle provides two anchor points on the neck, promoting self-alignment 
                  and cutting pinpoint pressure <strong>IN HALF</strong> compared to single-contact designs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-amber-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🎵 Perfect Intonation</h3>
                <p className="text-gray-700">
                  Thinner diameter fretbar reduces intonation issues while maintaining optimal string contact. 
                  Less tension needed means better tone and longer string life.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-amber-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🔧 Custom Radius Matching</h3>
                <p className="text-gray-700">
                  Precision-machined to match any fretboard radius exactly, requiring minimal tension 
                  to fret strings without buzzing or dead notes.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Performance Comparison</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Pressure Reduction</span>
                    <span className="text-2xl font-bold">50%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Stability Increase</span>
                    <span className="text-2xl font-bold">200%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Intonation Accuracy</span>
                    <span className="text-2xl font-bold">99.9%</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white/20 rounded-lg">
                  <p className="text-sm">
                    <strong>Lifetime Guarantee:</strong> We stand behind every capo with our 
                    comprehensive lifetime workmanship warranty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Process - Visual Storytelling */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Handcrafted to Perfection</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every component is precision-machined in our shop using aerospace-grade processes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl font-bold text-amber-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Precision Machining</h3>
              <p className="text-gray-600">
                Every part machined in-house using custom jigs and forming plates for 
                repeatable precision down to the knurled screws.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl font-bold text-amber-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Materials</h3>
              <p className="text-gray-600">
                Premium metals including brass, stainless steel, copper, and custom 
                steampunk alloys for durability and tone.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl font-bold text-amber-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Individual Assembly</h3>
              <p className="text-gray-600">
                Hand-assembled with stainless hinge pins and custom thumbscrews, 
                tested for perfect operation before shipping.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">🏆 Lifetime Workmanship Guarantee</h3>
            <p className="text-lg mb-6">
              We're so confident in our craftsmanship that every Kat Eyz Capo comes with 
              a comprehensive lifetime guarantee on all workmanship and materials.
            </p>
            <Link to="/products">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Experience the Quality
              </Button>
            </Link>
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

      {/* Final CTA - Compelling and Action-Oriented */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-amber-900 to-orange-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Sound?</h2>
          <p className="text-2xl mb-8 max-w-4xl mx-auto text-amber-100">
            Join thousands of professional musicians who trust Kat Eyz Capos for 
            <span className="text-amber-300 font-semibold"> precision, durability, and superior performance</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-300 mb-2">$105</div>
              <div className="text-amber-100">Premium Quality</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-300 mb-2">∞</div>
              <div className="text-amber-100">Lifetime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-300 mb-2">24/7</div>
              <div className="text-amber-100">Custom Support</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/products">
              <Button size="lg" className="text-xl px-12 py-4 bg-amber-600 hover:bg-amber-700 text-white shadow-2xl">
                Shop Collection Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-xl px-12 py-4 border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-amber-900">
                Request Custom Quote
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-amber-200 text-lg">
            🚚 Free shipping on all orders • 🎵 Custom sizing included • ⚡ Fast turnaround
          </p>
        </div>
      </section>
    </div>
  )
}

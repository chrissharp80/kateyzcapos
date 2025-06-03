
import { Star, Award, Wrench } from 'lucide-react'

export function About() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">About Our Capos</h1>
        
        <div className="prose prose-lg mx-auto mb-12">
          <p className="text-gray-700 mb-6 text-xl leading-relaxed">
            Each Kat Eyz Capo features a unique V-shaped design that provides optimal string pressure distribution, 
            ensuring your guitar maintains its natural tone while providing reliable fretting across all strings.
          </p>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Our capos are individually machined from premium materials including brass, stainless steel, and copper. 
            The knurled thumbscrews (now shorter for improved "petiteness") allow for precise tension control.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            All capos come with a lifetime guarantee and can be customized for your specific instrument's measurements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">V-Shaped Design</h3>
            <p className="text-gray-600">
              Our unique V-shaped contact surface distributes pressure evenly across all strings for optimal tone preservation.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Lifetime Guarantee</h3>
            <p className="text-gray-600">
              Every capo comes with a lifetime guarantee against manufacturing defects. We stand behind our craftsmanship.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Wrench className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Sizing</h3>
            <p className="text-gray-600">
              Each capo can be customized for your specific instrument's neck width, depth, and string spacing requirements.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">The Craftsman</h2>
          <p className="text-gray-700 leading-relaxed">
            Phil has been crafting precision guitar capos for over a decade, combining traditional machining techniques 
            with modern materials to create instruments that enhance rather than compromise your guitar's natural voice. 
            Each capo is individually inspected and tested before shipping to ensure it meets our exacting standards.
          </p>
        </div>
      </div>
    </div>
  )
}

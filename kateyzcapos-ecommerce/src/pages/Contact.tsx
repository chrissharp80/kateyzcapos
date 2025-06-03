
import { Mail, Globe, MapPin } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function Contact() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Have questions about our capos or need custom sizing? We're here to help with your specific requirements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Email
              </CardTitle>
              <CardDescription>
                Best way to reach us for custom orders and technical questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">sales@kateyzcapos.com</p>
              <p className="text-sm text-gray-600 mt-2">
                Response time: Usually within 24 hours
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                Website
              </CardTitle>
              <CardDescription>
                Visit our original website for additional information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">www.kateyzcapos.com</p>
              <p className="text-sm text-gray-600 mt-2">
                Additional product photos and sizing guides
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Location
            </CardTitle>
            <CardDescription>
              Handcrafted in the USA with pride
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">United States</p>
            <p className="text-sm text-gray-600 mt-2">
              All capos are individually machined and assembled in our workshop
            </p>
          </CardContent>
        </Card>

        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">Custom Orders</h2>
          <p className="text-gray-700 mb-3">
            Need a capo for an unusual neck width or have specific requirements? We specialize in custom work and 
            can accommodate most special requests.
          </p>
          <p className="text-gray-700">
            When contacting about custom orders, please include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Instrument type (guitar, banjo, mandolin, etc.)</li>
            <li>Neck width at the nut</li>
            <li>Fretboard radius if known</li>
            <li>Any special requirements or preferences</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

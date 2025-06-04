import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Product } from '@/types'

interface ProductsProps {
  products: Product[]
  onAddToCart: (product: Product, customizations?: string) => void
}

interface CustomizationOptions {
  metalStyle: string
  capoType: string
  neckRadius: string
  thumbscrewSize: string
  specialInstructions: string
}

export function Products({ products, onAddToCart }: ProductsProps) {
  const [customizations, setCustomizations] = useState<CustomizationOptions>({
    metalStyle: '',
    capoType: '',
    neckRadius: '',
    thumbscrewSize: '',
    specialInstructions: ''
  })
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  console.log('🎯 Products component received:', products.length, 'products')
  console.log('💰 First product price:', products[0]?.price)

  const metalStyleOptions = [
    'Polished Brass $65.00 USD',
    'Polished Stainless Steel $105.00 USD',
    'Steampunk (Mixed Metals) $90.00 USD',
    'Copper $75.00 USD',
    'Gunmetal $85.00 USD',
    'Antiqued Brass $75.00 USD'
  ]

  const capoTypeOptions = [
    'Guitar - Standard',
    'Guitar 2.0 - Enhanced Design',
    'Banjo B - 1st-4th fret',
    'Banjo C - Custom sizing'
  ]

  const neckRadiusOptions = [
    'No Radius - standard banjo',
    'Standard Guitar Radius (12")',
    'Vintage Guitar Radius (7.25")',
    'Modern Guitar Radius (9.5")',
    'Custom Radius - specify in instructions'
  ]

  const thumbscrewOptions = [
    '1/4" - Old Style (longer)',
    '1/4" - New Style (shorter)',
    '3/8" - Old Style (longer)',
    '3/8" - New Style (shorter)'
  ]

  const resetCustomizations = () => {
    setCustomizations({
      metalStyle: '',
      capoType: '',
      neckRadius: '',
      thumbscrewSize: '',
      specialInstructions: ''
    })
    setCurrentStep(1)
    setSelectedProduct(null)
  }

  const handleAddToCart = () => {
    if (selectedProduct) {
      const customizationString = `Metal Style: ${customizations.metalStyle}
Capo Type: ${customizations.capoType}
Neck Radius: ${customizations.neckRadius}
Thumbscrew: ${customizations.thumbscrewSize}
Special Instructions: ${customizations.specialInstructions}`
      
      onAddToCart(selectedProduct, customizationString)
      resetCustomizations()
    }
  }

  const isStepComplete = (step: number) => {
    switch (step) {
      case 1: return customizations.metalStyle !== ''
      case 2: return customizations.capoType !== ''
      case 3: return customizations.neckRadius !== ''
      case 4: return customizations.thumbscrewSize !== ''
      default: return false
    }
  }

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
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform"
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
                    <Button 
                      className="w-full"
                      onClick={() => {
                        setSelectedProduct(product)
                        setCurrentStep(1)
                      }}
                    >
                      Customize & Add to Cart
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Customize Your {selectedProduct?.name}</DialogTitle>
                      <DialogDescription>
                        Step {currentStep} of 5: Configure your capo specifications
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      {/* Progress indicator */}
                      <div className="flex justify-between items-center">
                        {[1, 2, 3, 4, 5].map((step) => (
                          <div
                            key={step}
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                              step < currentStep
                                ? 'bg-green-500 text-white'
                                : step === currentStep
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-600'
                            }`}
                          >
                            {step}
                          </div>
                        ))}
                      </div>

                      {/* Step 1: Metal Style */}
                      {currentStep === 1 && (
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="metalStyle">Select Metal Style & Finish</Label>
                            <Select 
                              value={customizations.metalStyle} 
                              onValueChange={(value) => setCustomizations(prev => ({ ...prev, metalStyle: value }))}
                            >
                              <SelectTrigger className="mt-2">
                                <SelectValue placeholder="Choose metal style and finish" />
                              </SelectTrigger>
                              <SelectContent>
                                {metalStyleOptions.map((option) => (
                                  <SelectItem key={option} value={option}>{option}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="bg-amber-50 p-3 rounded-md">
                            <p className="text-sm text-amber-800">
                              All capo styles are precision machined and include lifetime guarantee.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Capo Type */}
                      {currentStep === 2 && (
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="capoType">Select Capo Type & Instrument</Label>
                            <Select 
                              value={customizations.capoType} 
                              onValueChange={(value) => setCustomizations(prev => ({ ...prev, capoType: value }))}
                            >
                              <SelectTrigger className="mt-2">
                                <SelectValue placeholder="Choose instrument and capo type" />
                              </SelectTrigger>
                              <SelectContent>
                                {capoTypeOptions.map((option) => (
                                  <SelectItem key={option} value={option}>{option}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="bg-blue-50 p-3 rounded-md">
                            <p className="text-sm text-blue-800">
                              Banjo B capos work on 1st-4th frets. Banjo C capos are for custom sizing requirements.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Neck Radius */}
                      {currentStep === 3 && (
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="neckRadius">Select Neck Radius</Label>
                            <Select 
                              value={customizations.neckRadius} 
                              onValueChange={(value) => setCustomizations(prev => ({ ...prev, neckRadius: value }))}
                            >
                              <SelectTrigger className="mt-2">
                                <SelectValue placeholder="Choose fretboard radius" />
                              </SelectTrigger>
                              <SelectContent>
                                {neckRadiusOptions.map((option) => (
                                  <SelectItem key={option} value={option}>{option}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="bg-green-50 p-3 rounded-md">
                            <p className="text-sm text-green-800">
                              Neck radius affects the curvature of the capo pad. Most banjos have no radius (flat).
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Step 4: Thumbscrew */}
                      {currentStep === 4 && (
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="thumbscrewSize">Select Thumbscrew Size & Style</Label>
                            <Select 
                              value={customizations.thumbscrewSize} 
                              onValueChange={(value) => setCustomizations(prev => ({ ...prev, thumbscrewSize: value }))}
                            >
                              <SelectTrigger className="mt-2">
                                <SelectValue placeholder="Choose thumbscrew specifications" />
                              </SelectTrigger>
                              <SelectContent>
                                {thumbscrewOptions.map((option) => (
                                  <SelectItem key={option} value={option}>{option}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-md">
                            <p className="text-sm text-purple-800">
                              New style thumbscrews are shorter. 3/8" thumbscrews are typically used for banjos.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Step 5: Special Instructions */}
                      {currentStep === 5 && (
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="specialInstructions">Custom Measurements & Special Instructions</Label>
                            <Textarea
                              id="specialInstructions"
                              placeholder="Required measurements:&#10;• Fretboard width at highest capoed fret (mm/in)&#10;• Neck depth at volute, first fret, and highest capoed fret (mm/in)&#10;• Any special requirements or custom modifications..."
                              value={customizations.specialInstructions}
                              onChange={(e) => setCustomizations(prev => ({ ...prev, specialInstructions: e.target.value }))}
                              className="mt-2 h-32"
                            />
                          </div>
                          <div className="bg-red-50 p-3 rounded-md">
                            <p className="text-sm text-red-800 font-medium">
                              📏 Precise measurements are critical for proper fit!
                            </p>
                            <p className="text-xs text-red-600 mt-1">
                              Each capo is machined to your exact specifications. Inaccurate measurements may result in poor fit.
                            </p>
                          </div>
                          
                          {/* Order Summary */}
                          <div className="bg-gray-50 p-4 rounded-md">
                            <h4 className="font-medium mb-2">Order Summary:</h4>
                            <div className="text-sm space-y-1">
                              <p><strong>Metal Style:</strong> {customizations.metalStyle}</p>
                              <p><strong>Capo Type:</strong> {customizations.capoType}</p>
                              <p><strong>Neck Radius:</strong> {customizations.neckRadius}</p>
                              <p><strong>Thumbscrew:</strong> {customizations.thumbscrewSize}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <DialogFooter className="flex justify-between">
                      <div className="flex gap-2">
                        {currentStep > 1 && (
                          <Button 
                            variant="outline" 
                            onClick={() => setCurrentStep(prev => prev - 1)}
                          >
                            Previous
                          </Button>
                        )}
                        <Button 
                          variant="outline" 
                          onClick={resetCustomizations}
                        >
                          Cancel
                        </Button>
                      </div>
                      
                      <div className="flex gap-2">
                        {currentStep < 5 ? (
                          <Button 
                            onClick={() => setCurrentStep(prev => prev + 1)}
                            disabled={!isStepComplete(currentStep)}
                          >
                            Next
                          </Button>
                        ) : (
                          <Button 
                            onClick={handleAddToCart}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            Add to Cart - ${selectedProduct?.price.toFixed(2)}
                          </Button>
                        )}
                      </div>
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

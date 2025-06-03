
import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'

interface HeaderProps {
  cartItemCount: number
  onCartOpen: () => void
}

export function Header({ cartItemCount, onCartOpen }: HeaderProps) {
  const location = useLocation()

  return (
    <header className="bg-white shadow-sm border-b-4 border-red-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/favicon.png" alt="Kat Eyz Capos Logo" className="h-8 w-8 mr-3" />
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Kat Eyz Capos
            </Link>
            <p className="ml-4 text-gray-600 hidden sm:block">Handcrafted Guitar and Banjo Capos</p>
          </div>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/" 
                    className={`px-4 py-2 text-sm font-medium transition-colors hover:text-red-600 ${
                      location.pathname === '/' ? 'text-red-600' : 'text-gray-700'
                    }`}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/products" 
                    className={`px-4 py-2 text-sm font-medium transition-colors hover:text-red-600 ${
                      location.pathname === '/products' ? 'text-red-600' : 'text-gray-700'
                    }`}
                  >
                    Products
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/about" 
                    className={`px-4 py-2 text-sm font-medium transition-colors hover:text-red-600 ${
                      location.pathname === '/about' ? 'text-red-600' : 'text-gray-700'
                    }`}
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/contact" 
                    className={`px-4 py-2 text-sm font-medium transition-colors hover:text-red-600 ${
                      location.pathname === '/contact' ? 'text-red-600' : 'text-gray-700'
                    }`}
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            variant="outline"
            size="sm"
            onClick={onCartOpen}
            className="relative"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Cart ({cartItemCount})
            {cartItemCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                {cartItemCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}

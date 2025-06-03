export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  stock: number
}

export interface CartItem {
  product: Product
  quantity: number
  customizations?: string
}

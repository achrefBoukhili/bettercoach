export interface IregisterFormValues {
  name: string
  surname: string
  email: string
  password: string
}

export interface IloginFormValues {
  email: string
  password: string
}

export interface IsingleProductFormValues {
  size: string
}

export interface IsearchInputFormValues {
  searchPhrase: string
}

export interface Iuser {
  name: string
  surname: string
  jwtToken: string
  id: string
  isLogged: boolean
}

export interface IuserContext {
  user: Iuser
  updateUser: (newUser: Iuser) => void
  logout: () => void
  userFavoriteProducts: string[]
  toggleFavoriteProduct: (productID:string) => void,
  lastSelectedProductSLug: string
}

export interface Icategory {
  id: string;
  name: string;
  image: string;
  slug: string;
  live?: boolean;
}

export interface Iproduct {
  id: string
  category: string
  currency: string
  approved: boolean
  title: string
  inStock: boolean
  live: boolean
  featured: boolean
  images: [object]
  type: string
  brand: string
  color: string
  description: string
  price: [number]
  negotiable: boolean
  slug: string
  isAddedToFavs: boolean
  averageRating: number
  totalReviews: number
  percentageDiscount: number
  attributes: object
}

export interface IproductAttributes {
  id: string
  attributes: Iproduct
}

export interface IfavoriteProduct {
  attributes: { product: { data: IproductAttributes } }
}

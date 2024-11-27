export interface IregisterFormValues {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface IloginFormValues {
  email: string;
  password: string;
}

export interface IsingleProductFormValues {
  size: string;
}

export interface IsearchInputFormValues {
  searchPhrase: string;
}

export interface Iuser {
  name: string;
  surname: string;
  jwtToken: string;
  accessToken: string;
  id: string;
  isLogged: boolean;
}

export interface IuserContext {
  user: Iuser;
  updateUser: (newUser: Iuser) => void;
  logout: () => void;
  userFavoriteProducts: string[];
  toggleFavoriteProduct: (productID: string) => void;
}

export interface Icategory {
  id: string;
  name: string;
  image: string;
  slug: string;
  live?: boolean;
}

export interface Iproduct {
  id: string;
  category: string;
  currency: string;
  approved: boolean;
  title: string;
  inStock: boolean;
  live: boolean;
  featured: boolean;
  images: {
    secure_url: string;
    public_id: string;
  }[];
  type: string;
  brand: string;
  color: string;
  description: string;
  price: number[];
  negotiable: boolean;
  slug: string;
  isAddedToFavs: boolean;
  averageRating: number;
  totalReviews: number;
  percentageDiscount: number;
  attributes: object;
}

export interface IproductAttributes {
  id: string;
  attributes: Iproduct;
}

export interface IfavoriteProduct {
  attributes: { product: { data: IproductAttributes } };
}

export interface IproductReviews {
  reviewList: [{
    id: string
    review: string
    product: {}
    user: {
      displayName: string
      image: string
    }
    rating: number
    likes: [{
      displayName: string
      image: string
    }]
    dislikes: [{displayName: string
      image: string}]
    isImages: boolean
    createdAt: Date
    updatedAt: Date
  }]
  pageInfo: {
    endCursor: string
    hasNextPage: boolean
    totalCount: number
    avgRating: number
    totalRatings: number
    totalReviews: number
    ratingCounts: number
    ratingPercentage: {
      "1": number
      "2": number
      "3": number
      "4": number
      "5": number
    }
  }
}

export interface IReviewFormValues {
  productId: string;
  review: string;
  rating: number;
}
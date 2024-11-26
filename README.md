# E-commerce Web Application

## Technologies Used
- Next.js (React Framework)
- TypeScript
- Tailwind CSS for styling
- Formik & Yup for form handling and validation
- GraphQL (Apollo Client)
- React Context for state management

## Architecture
The application follows a component-based architecture with:

### Core Structure
- Pages directory (`src/pages`) - Next.js routing
- Components directory (`src/components`) - Reusable UI components
- Hooks directory - Custom React hooks for business logic
- GraphQL integration for data fetching

### Key Features
1. Product Management
   - Product listing
   - Product details
   - Search functionality
   - Product reviews

2. User Features
   - Authentication (Login/Register)
   - Reviews and ratings
   - User account management
   - Favorites system
   - Shopping cart
   - Order management

3. Form Handling
   - Search functionality
   - Product filtering
   - User registration forms
   - User authentication forms
   - Product review forms
   - Product purchase forms

## Local Development Setup

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
pnpm install
```
3. Run the development server
```bash
pnpm dev
```
4. Open browser The application will be available at http://localhost:3000

## Project Structure:
```bash
src/
├── components/         # Reusable UI components
├── pages/             # Next.js pages and routing
├── hooks/             # Custom React hooks
├── context/           # React Context providers
├── api/           # GraphQL integration
└── styles/                # Tailwind CSS styles
biome.json # Biome configuration for linting and formatting
```
### Key Components
 - ProductsGrid - Displays product listings
 - SearchInput - Handles product search
 - SingleProductForm - Product purchase form
 - LoginForm/RegisterForm - Authentication forms
 - Navbar - Navigation and cart management
 - ErrorBoundary - Error handling component

### State Management
 - User authentication state
 - Shopping cart state
 - Favorites management
 - Search and filter states

### Routing
 - Dynamic product pages (`/product/[slug]`)
 - Search pages (`/search?phrase=[searchQuery]`)
 - User account pages (`/user-account`, `/user-orders`, `/user-favorites`)
Authentication pages (`/login`, `/register`)
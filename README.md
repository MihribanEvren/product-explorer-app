# Product Explorer App

- A modern application that allows users to list products fetched from an API, search for products, and view detailed information about individual products.
- The project structure is designed to be clean and scalable, making it easy to add new features or extend existing ones.
- For instance, if you decide to fetch users from the API in the future, you can simply add a userApi folder under `src/api` and a `userHooks` folder to manage the logic.

### 🚀 Live Demo:

Check out the live demo: [Product Explorer App](https://product-explorer-app.netlify.app/)

## Folder Structure

```plaintext
src
│
├── api                       # API interactions
│   └── productApi            # Product API requests
│       ├── fetchProducts.js  # Function to fetch all products
│       └── fetchProduct.js   # Function to fetch a single product by ID
│
├── hooks                     # Custom hooks
│   └── productHooks          # Hooks for products
│       ├── useProducts.js    # Hook to manage fetching all products with TanStack Query
│       └── useProduct.js     # Hook to fetch a single product with TanStack Query
│
├── state                     # State management with Zustand
│   └── productStore          # Store for product-related states
│       ├── productsStore.js  # Global state for all products
│       └── filtersStore.js   # State for filtering and pagination
│
├── layouts                   # Layout components
│   └── MainLayout.jsx        # Main layout including Navbar and shared components (Navbar + child)
│
├── components                    # React components
│   ├── navbar                    # Navigation bar
│   │   ├── Navbar.jsx            # Main navigation bar
│   │   └── SearchInput.jsx       # Search input for products
│   ├── sidebar                   # Sidebar (Future feature)
│   │   └── Sidebar.jsx           # Sidebar for categories, brands, and price filtering
│   ├── main
│   │   ├── ProductList.jsx       # Component to list all products
│   │   ├── ProductCard.jsx       # Card component for individual products
│   │   ├── Pagination.jsx        # Pagination component
│   │   ├── ItemCount.jsx         # Component for selecting items per page
│   │   └── ProductSkeleton.jsx   # Skeleton loading component
│   └── productDetail             # Product detail components
│       └── ProductDetail.jsx     # Component to display details of a selected product
│
├── pages                         # Application pages
│   ├── HomePage.jsx              # Home page with product list (Navbar + Main)
│   └── ProductDetailPage.jsx     # Product detail page (Navbar + ProductDetail)
│
├── App.jsx                       # Main application and routing setup
└── main.jsx
```

### Technologies Used

- **React:** For creating UI components
- **TanStack Query:** Manage API calls and data fetching
- **Zustand:** Global state management
- **Tailwind - Material UI:** Styling and layout
- **React Router:** Client-side routing

### Features

- Product listing
- Selecting the number of products displayed per page
- Pagination
- Product detail page
- Searching for products using the search input

### Potential Enhancements

- **Sidebar:** Add dynamic product filtering based on categories, brands, and prices
- **Cart:** Enable users to add products to a shopping cart

### Installation

Follow these steps to set up the project locally:

#### 1. Clone the repository

```
git clone https://github.com/MihribanEvren/product-explorer-app.git
```

#### 2. Install dependencies

```
npm install
```

#### 3. Start the development server

```
npm run dev
```

### 🙌 Contributing

Contributions are welcome! If you’d like to contribute to the project, feel free to fork the repository and submit a pull request.

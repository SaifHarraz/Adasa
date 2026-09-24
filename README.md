# 3adasa (عدسة) - Photography Blog Platform

A modern, responsive React frontend web application built with Vite and Tailwind CSS. **3adasa** (Arabic for "Lens") is a dedicated photography blog platform featuring articles, tutorials, and tips for photographers of all levels. The platform offers article listings, detailed blog views, filtering, and subscription capabilities, with content entirely in Arabic.

## Features

- **Photography Blog Hub:** Displays rich photography-related content, including featured articles, recent posts, and related articles based on photography niches (e.g., Lighting, Portraits, Landscapes).
- **Categorization & Filtering:** Built-in tools for users to filter blogs by category.
- **Pages & Navigation:** Fully fledged pages including Home, About Us, Blog, Blog Details (`/blog/:slug`), Privacy, Terms, and custom Error/404 handling.
- **Fast Development & Build:** Powered by [Vite](https://vitejs.dev/) for instantaneous HMR and optimized builds.
- **Modern UI:** Styled using [Tailwind CSS v4](https://tailwindcss.com/) for a sleek, responsive, and customizable design.
- **Client-Side Routing:** Seamless navigation using [React Router v7](https://reactrouter.com/) (`createBrowserRouter`).
- **Iconography:** Integrated with FontAwesome for scalable vector icons.
- **Arabic Language Support:** Tailored content and UI components supporting Arabic text and right-to-left (RTL) capabilities natively through Tailwind.

## Project Architecture

The application is structured following a modular, component-based architecture designed for scalability and separation of concerns:

```text
3adasa/
├── public/                 # Static assets (favicon, icons) served directly
├── src/
│   ├── assets/             # Media files and local static data
│   │   ├── postsData/      # JSON/JS files for blog post content (e.g. photography tutorials)
│   │   └── icon.png
│   ├── Components/         # Reusable presentation and layout components
│   │   ├── Layout/         # Structural components (Navbar, Footer, Layout)
│   │   └── Ui/             # Feature-specific UI components grouped by context:
│   │       ├── About/      # AboutHeader, AboutTeam, OurValues...
│   │       ├── Blog/       # BlogArticle, BlogFilter, BlogGrid, BlogHero...
│   │       └── Home/       # FeaturedArticles, HomeDiscover, HomeHero, Subscribe...
│   ├── Pages/              # Route-level components mapping directly to URLs
│   │   ├── Home.jsx        # Landing page with featured and recent posts
│   │   ├── Blog.jsx        # Main blog listing view
│   │   ├── BlogDetails.jsx # Detailed view for individual blog posts
│   │   └── About.jsx, Privacy.jsx, Terms.jsx, Error.jsx, NoPageError.jsx
│   ├── App.jsx             # Main Router configuration (`createBrowserRouter`)
│   └── main.jsx            # Application entry point & React DOM rendering
├── eslint.config.js        # ESLint configuration for code quality
├── vite.config.js          # Vite bundler configuration
└── package.json            # Project dependencies and npm scripts
```

### Routing Strategy
Routing is handled centrally in `App.jsx` using `createBrowserRouter` from React Router v7. The app utilizes a **nested routing** pattern:
- A root `Layout` component wraps all child routes, ensuring the Navbar and Footer remain persistent.
- Page components (like `Home`, `Blog`, `BlogDetails`) are dynamically rendered within the layout based on the URL path.
- Fallback and Error handling are gracefully managed using custom error elements (`ErrorPage` and `NoPageError`).

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd 3adasa
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

The built assets will be located in the `dist/` directory. You can preview the production build locally using:

```bash
npm run preview
```

## Linting

To run the linter and check for code quality issues:

```bash
npm run lint
```

## Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [FontAwesome](https://fontawesome.com/)
- **Linting:** [ESLint](https://eslint.org/)

## License

This project is private and intended for internal use.

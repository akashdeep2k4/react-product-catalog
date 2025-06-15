# Product Catalog

A responsive product catalog web app built with **React**, **Vite**, and **styled-components**. Browse, search, and filter a list of products with a clean UI and light/dark theme support.

## Features

- 🛒 Browse a collection of products with images, prices, and details
- 🔍 Search and filter products by name or category
- 🌙 Toggle between light and dark themes
- 📱 Responsive design for all devices
- ⚡️ Fast development with Vite and hot module replacement
- 🍞 Toast notifications for user actions

## Getting Started

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Start the development server:**

   ```sh
   npm run dev
   ```

3. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

- `src/` – Main source code
  - `components/` – Reusable UI components (Header, Footer, ProductCard)
  - `pages/` – Page components (Home, ProductDetails, NotFound)
  - `routes/` – App routing setup
  - `theme.js` – Theme definitions
  - `style.js` – Global styles
- `public/products.json` – Product data

## Customization

- **Add products:**  
  Edit [`public/products.json`](public/products.json) to add or update products.
- **Change theme colors:**  
  Update [`src/theme.js`](src/theme.js) for your preferred palette.

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Run ESLint

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [styled-components](https://styled-components.com/)
- [react-router-dom](https://reactrouter.com/)
- [react-hot-toast](https://react-hot-toast.com/)
- [react-icons](https://react-icons.github.io/react-icons/)

---

Made with ❤️ for learning and rapid prototyping.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

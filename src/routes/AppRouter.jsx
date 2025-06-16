// AppRouter.jsx - Defines application routes
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ProductDetails } from "../pages/ProductDetails";
import { NotFound } from "../pages/NotFound";
import { App } from "../App";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Main layout with nested routes */}
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Route>

      {/* Fallback for unmatched routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

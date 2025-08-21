// AnimatedRoutes.jsx
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./Layouts/Layout";
import { lazy } from "react";

const ProductCards = lazy(() => import("./components/ProductCards"));
const Welcome = lazy(() => import("./components/Welcome"));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/undefined" element={<Navigate to="/welcome" replace />} />
          <Route path="/" element={<Navigate to="/welcome" replace />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" element={<ProductCards />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;

// App.jsx
import "./App.css";
import { Suspense, useEffect } from "react";
import SEO from "./components/SEO";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  return (
    <>
      <Analytics />
      <SEO />
      <BrowserRouter>
        <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
          <AnimatedRoutes />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

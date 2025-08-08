import "./App.css";
import Hero from "./components/Hero";
import { useEffect } from "react";
import ProductCards from "./components/ProductCards";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("dark");
  }, []);

  
  return (
    <>
      <Hero />
      <ProductCards/>
      <Footer copywrite="Copywrite Develook"/>
    </>
  );
}

export default App;

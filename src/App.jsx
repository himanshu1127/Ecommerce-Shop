import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Category from "./Components/Catrgory/Category";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";

import "./App.css";
import Footer from "./Components/Footer/Footer";

function App() {
  const [products, setproducts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      fetch("https://fakestoreapi.com/products", {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((response) => {
          setproducts(response);
        })
        .catch((error) => console.error(error));
    };
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop products={products} />} />
          <Route
            path="/Mens"
            element={<Category category="men's clothing" product={products} />}
          />
          <Route
            path="/Womens"
            element={
              <Category category="women's clothing" product={products} />
            }
          />
          <Route
            path="/Kids"
            element={<Category category="Kids" product={products} />}
          />
          <Route path="/Product" element={<Product product={products} />} />
          <Route
            path="/Product/:productId"
            element={<Product product={products} />}
          />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

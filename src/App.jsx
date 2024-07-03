import { useState, useEffect, useContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Category from "./Components/Catrgory/Category";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";

import "./App.css";
import Footer from "./Components/Footer/Footer";
import Item from "./Components/Item/Item";
import { ShopContext } from "./Context/ShopContext";

function App() {
  const { newProducts } = useContext(ShopContext);
  const products = newProducts;

  // const [products, setProducts] = useState();
  // setProducts(newProducts);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     fetch("https://fakestoreapi.com/products", {
  //       mode: "cors",
  //     })
  //       .then((response) => response.json())
  //       .then((response) => {
  //         setProducts(response);
  //       })
  //       .catch((error) => console.error(error));
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar size={0} />
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

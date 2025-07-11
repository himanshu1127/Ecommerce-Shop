import { useState, useEffect, useContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Category from "./Components/Catrgory/Category";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

import "./App.css";
import Footer from "./Components/Footer/Footer";
import Item from "./Components/Item/Item";
import { ShopContext } from "./Context/ShopContext";

function App() {
  const { newProducts, cartItems } = useContext(ShopContext);
  const products = newProducts;
  
  // Calculate total cart items
  const getTotalCartItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

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
    <div className="App min-h-screen w-full overflow-x-hidden">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar size={getTotalCartItems()} />
        <main className="w-full">
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
            <Route
              path="/product/:productId"
              element={<Product product={products} />}
            />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Login" element={<LoginSignup />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

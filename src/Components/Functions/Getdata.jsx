import React, { createContext, useState, useEffect } from "react";

function Getdata() {
  const [newProducts, setNewProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      data ? setNewProducts(data) : console.log("no");
    };
    fetchProducts();
  }, []);

  return newProducts;

  //   useEffect(() => {
  //     const fetchProducts = async () => {
  //       fetch("https://fakestoreapi.com/products", {
  //         mode: "cors",
  //       })
  //         .then((response) => response.json())
  //         .then((response) => {
  //           setNewProducts(response);
  //         })
  //         .catch((error) => console.error(error));
  //     };
  //     fetchProducts();
  //   }, []);
  //   return newProducts;
}

export default Getdata;

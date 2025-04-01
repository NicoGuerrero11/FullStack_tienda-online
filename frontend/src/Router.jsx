import React from "react";
import { Routes, Route } from "react-router";
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Product from './pages/Product.jsx'
import PageNotFound from "./pages/PageNotFound.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Orders from "./pages/Orders.jsx";
import AdminProduct from "./pages/AdminProduct.jsx";
import EditProduct from "./pages/EditProduct.jsx";
import CustomLayOut from "./layouts/CustomLayOut.jsx";


const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<CustomLayOut />}>
          <Route index  element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />

          <Route path="/admin/products" element={<AdminProduct />}/>
          <Route path="/admin/products/:idProduct/edit?" element={< EditProduct/>}/>
        </Route>
 
        <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default Router

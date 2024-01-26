import { useEffect, useState } from "react";
import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import ProductPage from "./pages/admin/product";
import DashboardPage from "./pages/admin/dashboard";
import { Route, Routes } from "react-router-dom";
import {getProducts} from './api/product';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    (async()=>{
      const data = await getProducts();
      console.log(data);
      setProducts(data);
    })()
  })
 return ( 
 <>
<div>
  <Header/>;
  <div className="container-fluid">
    <div className="row">
    <Sidebar/>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
     <Routes>
      <Route path="/" element={<h1>Home page</h1>}/>
      <Route path="admin" element={<DashboardPage/>}/>
      <Route path="admin/products" element={<ProductPage products={products}/>}/>
     </Routes>
        <DashboardPage/>
        <ProductPage/>
      </main>
    </div>
  </div>
</div>

 </>
 )
}

export default App;

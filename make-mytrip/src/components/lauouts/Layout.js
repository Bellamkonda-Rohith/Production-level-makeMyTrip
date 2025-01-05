import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";


 const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <main className="container-fluid p-5   shadow border-secondary  rounded" >
          <Outlet/>
        </main>
      </div>
    
    
    </>
  )
}
export default Layout;
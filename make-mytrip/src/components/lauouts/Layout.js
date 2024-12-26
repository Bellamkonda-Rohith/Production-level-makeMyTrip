import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";


 const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <main className=" p-5  bg-light shadow border-secondary  rounded mx-5" >
          <Outlet/>
        </main>
      </div>
    
    
    </>
  )
}
export default Layout;
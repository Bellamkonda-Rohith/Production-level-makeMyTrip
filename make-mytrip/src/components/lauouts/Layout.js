import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";


 const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <main className=" p-5 mx-4 bg-light shadow border-secondary custom-margin ">
          <Outlet/>
        </main>
      </div>
    
    
    </>
  )
}
export default Layout;
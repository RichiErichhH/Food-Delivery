import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";


const Applayout=()=>{
     return(
     <>
          <Header />
          <Body />
          <Footer />
     </>
     )
}
 // Passing the react element inside the root
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);

/*
App Layout:
     Header
          -Logo
          -Nav Items(Right side)
          -cart
     Body
          -Search Bar
          -Restruntlist
               -RestarantCard
                    -Image
                    -Name
                    -Rating
                    -Cusines
     Footer
          -Links
          -copyright
*/
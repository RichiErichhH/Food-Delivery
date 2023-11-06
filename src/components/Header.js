import { useState } from "react";
const loggedIn = () =>{
     return true;
}
const Title= ()=>{
    return(
         <div>
         <a href="/">
         <img alt="logo" src="https://cdn.vectorstock.com/i/preview-1x/73/82/food-logo-vector-38377382.jpg" className="logo"></img>
         </a>
         </div>
    )
    }
    const Header = () => {
     const [isloggedIn,setloggedIn] = useState(true)
     return (
     <div className="header">
          <Title />
          <div className="nav-items">
               <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
               </ul>
          </div>
          {isloggedIn ?<button onClick={()=> setloggedIn(false)}>Logout</button> : 
          <button onClick={()=>setloggedIn(true)}>Login</button>}
     </div>
     );
}
export default Header;
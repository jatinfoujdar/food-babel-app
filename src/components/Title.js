import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

// const  loggedInUser = ()=>{
//   //check authentication
//   return false 
//   // else false
// } 

const isOnline = useOnline;

export const Title = () => (
    <a href="/">
     <img className="logo" alt = "logo" src="https://seeklogo.com/images/B/bored-ape-nft-logo-0336141711-seeklogo.com.png"/>
     </a>
     );
 

     // Composing Components
export const Header = () => {
  const [isLoggedIn , setIsLoggedIn] = useState(true)
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
              <li>
              <Link to ="/">Home</Link>
               </li>
                <li>
                <Link to ="/about">About us</Link>
                </li>             
              <li>
              <Link to ="/contact">Contact </Link> 
              </li>
              <li>
              <Link to ="/instamart">Instamart</Link> 
              </li>
              <li>Cart</li>
          </ul>
        </div>

          <h1>{isOnline? "✔️" : "🔴"}</h1>

        {
          isLoggedIn ? (
            <button  onClick={()=>setIsLoggedIn(false)}>Logout</button>)
          :(
            <button onClick={()=>setIsLoggedIn(true)}>Login</button>)
        }
       
      </div>
    );
  };
 
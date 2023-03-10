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
     <img className="h-40 p-8 " alt = "logo" src="https://seeklogo.com/images/B/bored-ape-nft-logo-0336141711-seeklogo.com.png"/>
     </a>
     );
 

     // Composing Components
export const Header = () => {
  const [isLoggedIn , setIsLoggedIn] = useState(true)
    return (
      <div className="bg-gray-900 text-white flex justify-between shadow-lg ">
        <Title />
        <div className="nav-items ">
          <ul className="flex py-10 ">
              <li className="px-2  hover:text-yellow-400">
              <Link to ="/">Home</Link>
               </li>
                <li className="px-2 hover:text-yellow-400">
                <Link to ="/about">About us</Link>
                </li>             
              <li className="px-2 hover:text-yellow-400">
              <Link to ="/contact">Contact </Link> 
              </li>
              <li className="px-2 hover:text-yellow-400">
              <Link to ="/instamart">Instamart</Link> 
              </li>
              <li className="px-2">Cart</li>
          </ul>
        
        </div>

        <h1>{isOnline? "✔️" : "🔴"}</h1>

        <div className="my-10 mr-10 bg-yellow-400 p-2 rounded-lg hover:bg-blue-700 text-white font-bold ">
        
{
  isLoggedIn ? (
    <button className="p-2 " onClick={()=>setIsLoggedIn(false)}>Logout</button>)
  :(
    <button className="p-2 " onClick={()=>setIsLoggedIn(true)}>Login</button>)
}
</div>
       
      </div>
    );
  };
 
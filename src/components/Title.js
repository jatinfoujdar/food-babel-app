import { useState } from "react";

const  loggedInUser = ()=>{
  //check authentication
  return false 
  // else false
} 

export const Title = () => (
    <a href="/">
     <img className="logo" alt = "logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Food_Network_Logo.svg/1200px-Food_Network_Logo.svg.png"/>
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
              <li>Home </li>
              <li>About us</li>
              <li>Contact</li>
              <li>Cart</li>
          </ul>
        </div>
        {
          isLoggedIn ? (
            <button  onClick={()=>setIsLoggedIn(false)}>Logout</button>)
          :(
            <button onClick={()=>setIsLoggedIn(true)}>Login</button>)
        }
       
      </div>
    );
  };
 
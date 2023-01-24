import React from "react";
import  ReactDOM  from "react-dom/client";

const Title = ()=>(
    <h1 id="title" key="h2">Food villa</h1>

)

const HeaderComponents =()=>{
    return(
        <div>
            <Title/>
  <div className="nav-item">
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
    </ul>
  </div>
        </div>
    )
}

const AppLayout = ()=>{
    return(
{}
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeaderComponents />)
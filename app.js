import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
<a href="/">
 <img className="logo" alt = "logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Food_Network_Logo.svg/1200px-Food_Network_Logo.svg.png"/>
 </a>
 );

// Composing Comopnentss
const HeaderComponent = () => {
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
    </div>
  );
};
const Body=()=>{
    return(
        <h4>body</h4>
    )
}
const Footer=()=>{
    return(
        <h4>Footer</h4>
    )
}

const AppLayout =() =>{
    return(
  <>
      <Header />
      <Body />
      <Footer/>
  </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
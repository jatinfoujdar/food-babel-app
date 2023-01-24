import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
<a href="/">
 <img className="logo" alt = "logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Food_Network_Logo.svg/1200px-Food_Network_Logo.svg.png"/>
 </a>
 );

// Composing Comopnentss
const Header = () => {
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

const RestrauntCard =()=>{
    return(
        <div className="card">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kack9oun6qtoz1tzbt0i"/>
            <h2>Burger King</h2>
            <h3>4.2 stars</h3>
        </div>
    )
}

const Body=()=>{
    return(
        <div className="restrauntCards">
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
            <RestrauntCard/>
        </div>
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

root.render(<AppLayout/>);
import React from 'react';
// import Profile from './Profile';
import ProfileClass from './ProfileClass';
// import { Outlet } from 'react-router-dom'


class About extends React.Component{
constructor(props){
  super(props)
 console.log("constructur");
}
componentDidMount(){
   
  console.log("componetdidmount");
}
  render(){
    console.log("render");
    return (
      <div>
          <h1>About US</h1>
          <ProfileClass name={"Jatin Foujdar"}/>
      </div>
    )
  }
}

export default About
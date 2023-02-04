import React from "react";

class Profile extends React.Component{
  constructor(props){
    super(props)
    this.state={
      userInfo:{
        name: "dummy",
        location:"dummy",
      },
    };
    console.log("constructur");
  }
  async componentDidMount(){
    const data =await fetch("https://api.github.com/users/jatinfoujdar")
    const json = await data.json();
  
    this.setState({
      userInfo:json,
    })
  
    console.log("componet did mount");
  }
render(){
    console.log("render");
  return(
  <div>
  <h1>Profile class components</h1>
  <img src={this.state.userInfo.avatar_url}/>
  <h2>name:{this.state.userInfo.name}</h2> 
  <h2>location:{this.state.userInfo.location}</h2>
  </div>
  )
}
}

export default Profile;
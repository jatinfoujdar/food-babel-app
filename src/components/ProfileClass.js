import React from "react";

class Profile extends React.Component{
    constructor(props){
      super(props)
    
      this.state = {
        count: 0,
       
      };     
    }
render(){
    const {count} = this.state;
  return(
  <div>
  <h1>Profile class components</h1>
  <h2>name:{this.props.name}</h2> 
  <h2>count:{count}</h2> 
  <button onClick={()=>{this.setState({
    count: 1,
  })
  }}>Setcount</button>
  </div>
  )
}
}

export default Profile;
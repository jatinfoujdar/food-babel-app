import React from 'react';
import Profile from './Profile';
import ProfileClass from './ProfileClass';
// import { Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1>About US</h1>
        {/* <Outlet/> */}
        <Profile name={"JAtin"}/>
        <ProfileClass name={"foujdar"}/>
    </div>
  )
}

export default About
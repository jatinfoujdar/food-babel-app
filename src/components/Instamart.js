import React, { useState } from 'react'

const Section = ({title, description, isVisible,setIsVisible})=>{
  return <div className= 'border border-black p-2 m-2 '>
     <h3 className='font-bold text-xl
     '>{title}</h3>
     {isVisible ?(
       <button onClick={()=>setIsVisible(false)} className='cursor-pointer underline'>Hide</button>
         
     )
           :
     (      
      <button onClick={()=>setIsVisible(true)} className='cursor-pointer underline'>Show</button>
     )}
    
   
     {isVisible && <p>{description}</p>}
  </div>
}


const Instamart = () => {
  const [sectionConfig,setSectionConfig]=useState({
    showAbout:false,
    showTeam: false,
    showCareer:false,
  })
  return (
    <div >
      <h1 className='text-3xl p-2 m-2 font-bold'>Instamart</h1>
        <Section title={"About Instamart"}
        description={"this is the about section of Instamart"} 
        isVisible={sectionConfig.showAbout}
        setIsVisible={()=>setSectionConfig({
          showAbout:true,
          showTeam: false,
          showCareer:false,
        })}
        />

<Section title={"Team Instamart"}
        description={"this is the about section of Team"}
        isVisible={sectionConfig.showCareer} 
        setIsVisible={()=>setSectionConfig({
          showAbout:false,
          showTeam: true,
          showCareer:false,
        })}/>

<Section title={"Careers "}
        description={"this is the about section of Career"} 
        isVisible={sectionConfig.showTeam}
        setIsVisible={()=>setSectionConfig({
          showAbout:false,
          showTeam: false,
          showCareer:true,
        })}/>    
    </div>
  )
}

export default Instamart
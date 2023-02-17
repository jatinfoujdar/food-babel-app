import React, { useState } from 'react'

const Section = ({title, description, isVisible,setIsVisible})=>{
  return <div className= 'border border-black p-2 m-2 '>
     <h3 className='font-bold text-xl
     '>{title}</h3>

<button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Show" : "Hide"}
      </button>
      {isVisible && <p>{description}</p>}
  </div>


     {/* {isVisible ?(
       <button onClick={()=>setIsVisible(false)} className='cursor-pointer underline'>Hide</button>
         
     )
           :
     (      
      <button onClick={()=>setIsVisible(true)} className='cursor-pointer underline'>Show</button>
     )} */}
    
}


const Instamart = () => {
  const [visibleSection,setVisibleSection]=useState("about")
  return (
    <div >
      <h1 className='text-3xl p-2 m-2 font-bold'>Instamart</h1>
        <Section title={"About Instamart"}
        description={"this is the about section of Instamart"} 
        isVisible={visibleSection == "about"}
        setIsVisible={()=>setVisibleSection("about")}
        />

<Section title={"Team Instamart"}
        description={"this is the about section of Team"}
        isVisible={visibleSection == "Team"} 
        setIsVisible={()=>setVisibleSection("Team")}/>

<Section title={"Careers "}
        description={"this is the about section of Career"} 
        isVisible={visibleSection == "careers"}
        setIsVisible={()=>setVisibleSection("careers")}/>    
    </div>
  )
}

export default Instamart
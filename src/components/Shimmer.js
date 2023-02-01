import React from 'react'

const Shimmer = () => {
  return (
    <div className="container">
     {Array(5).fill("").map((e)=>(
       <article>
       <div class="line"></div>
       <div class="line"></div>
       <div class="line"></div>
       <div class="shimmer"></div>
   </article>
     ))}
   
</div>
  )
}

export default Shimmer
import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex p-40  animate-pulse '>
     {Array(5).fill("").map((e)=>(
      
       <div class="flex-1 space-y-6 py-1 border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto ">
         <div class="h-2 bg-slate-200 rounded"></div>
         <div class="space-y-3">
           <div class="grid grid-cols-3 gap-4">
             <div class="h-10 bg-slate-200 rounded col-span-2"></div>
             <div class="h-10 bg-slate-200 rounded col-span-1"></div>
           </div>
           <div class="h-10 bg-slate-200 rounded"></div>
           </div>
       </div>

     ))}
   
</div>
  )
}

export default Shimmer
import React from 'react'

const ClassicalButton = () => {
  return (
    <>
    
    <button className="relative block group ">
        <span className="absolute inset-0 border-2 border-white border-dashed rounded-lg"></span>
        <div className="transition bg-black border-2 border-white rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="p-2 ">
            <p className="text-xl font-outerSans font-medium">Click Me 😉</p>
          </div>
        </div>
      </button>
      
    </>
  )
}

export default ClassicalButton
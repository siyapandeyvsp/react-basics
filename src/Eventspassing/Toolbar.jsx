import React from 'react'

const Toolbar = ({children}) => {
  return (
    <div onClick={()=>{alert("toolbar!!")}}
    className=' flex justify-start w-full m-5 p-5 rounded-lg bg-amber-100 h-fit '>
      {children}
    </div>
  )
}

export default Toolbar

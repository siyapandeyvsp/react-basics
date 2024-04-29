import React from 'react'

const DefaultBehavior2 = () => {
  return (
    <div>
    <form onSubmit={e=>{e.preventDefault();
    alert("submit without refresh")}}>
      <input className='border-2 border-blue-400 m-5 rounded-full' />
      <button className='m-3 px-5 py-2 rounded-full bg-blue-500 text-white'>Send</button>
    </form>
    </div>
  )
}

export default DefaultBehavior2

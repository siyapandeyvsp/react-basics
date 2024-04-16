import React from 'react'
// Challenge 3 of 3: Passing JSX in a children prop 
// Extract a Card component from the markup below, and use the children prop to pass different JSX to it:
const Card = ({children , title }) => {
  return (
    <div className='w-96  m-5  border rounded-lg border-black '>
     <h1 className='text-xl text-center text-orange-800'>{title}</h1>
     <div className='p-5 flex items-center justify-center'>{children}</div>
      
    </div>
  )
}

export default Card

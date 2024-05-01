import React from 'react'

const Button = ({onClick,children}) => {
  return (
    <button className='m-5 py-2 px-6 text-white  bg-blue-500 shadow-lg rounded-lg hover:bg-blue-300 disabled:bg-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed' onClick={onClick} >
      {children}
    </button>
  )
}

export default Button

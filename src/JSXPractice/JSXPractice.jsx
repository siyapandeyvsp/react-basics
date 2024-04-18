import React from 'react'
import TodoList from './TodoList'

const JSXPractice = () => {

  return (
    <div>
      <h1 className='flex flex-col items-center  p-5 text-xl text-center font-bold text-blue-500 '> JSXPractice </h1>
      <p className='question '><b>Challenge 3 of 3:</b> Write an expression inside JSX curly bracesIn the object below, the full image URL is split into four parts: base URL, imageId, imageSize, and file extension.
        We want the image URL to combine these attributes together: base URL (always 'https://i.imgur.com/'), imageId ('7vQD0fP'), imageSize ('s'), and file extension (always '.jpg'). However, something is wrong with how the img tag specifies its src.
        Can you fix it?</p>
      <TodoList />
    </div>
  )
}

export default JSXPractice

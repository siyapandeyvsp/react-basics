import React from 'react'
import JSXPractice from './JSXPractice/JSXPractice'
import PropsPractice from './PropsPractice/PropsPractice'
import ConditionalRendering from './ConditionalRendering/ConditionalRendering'
import RenderingLists from './RenderingLists/RenderingLists'
const Navbar = () => {
  return (
    <div >
      <h1 className='text-3xl text-center text-blue-900 font-bold ' >Practice Questions </h1>
      <JSXPractice />
      <PropsPractice />
      <ConditionalRendering />
      <RenderingLists />
    </div>
  )
}

export default Navbar

import React from 'react'
import CartoonCard from './CartoonCard'
import LocalCartoonCard from './LocalCartoonCard'

const CartoonsGallery = () => {
  return (
    <div className='m-5 flex flex-col items-center'>
    <p className='my-5 w-full  text-center'>This gallery is created with simple States , a state is reset accross page refresh </p>
<CartoonCard/>
<p className='my-5 text-center'>This gallery is created with LocalStorage , it persists accross page refresh and brower closing </p>
<LocalCartoonCard/>
    </div>
  )
}

export default CartoonsGallery

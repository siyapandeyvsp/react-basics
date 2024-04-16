import React from 'react'
import Gallery from './Gallery'
import ProfileImage from './ProfileImage'
import CardHolder from './CardHolder'
const PropsPractice = () => {
  return (
    <div>
       <h1 className='text-xl p-5 font-bold text-center text-blue-500'> Props Practice </h1>
      <p><b>Challenge 1 of 3:</b> Extract a component 
This Gallery component contains some very similar markup for two profiles. Extract a Profile component out of it to reduce the duplication. You’ll need to choose what props to pass to it.</p>
      <Gallery/>
      <p><b>Challenge 2 of 3:</b> Adjust the image size based on a prop 
In this example, Avatar receives a numeric size prop which determines the img width and height. The size prop is set to 40 in this example. However, if you open the image in a new tab, you’ll notice that the image itself is larger (160 pixels). The real image size is determined by which thumbnail size you’re requesting.

Change the Avatar component to request the closest image size based on the size prop. Specifically, if the size is less than 90, pass 's' (“small”) rather than 'b' (“big”) to the getImageUrl function. Verify that your changes work by rendering avatars with different values of the size prop and opening images in a new tab.</p>
      <ProfileImage/>
      <p><b>Challenge 3 of 3:</b> Passing JSX in a children prop 
Extract a Card component from the markup below, and use the children prop to pass different JSX to it:</p>
      <CardHolder/>
    </div>
  )
}

export default PropsPractice

import React from 'react'
import PackingList from './PackingList'
import PackingList2 from './PackingList2'
import DrinkList from './DrinkList'

const ConditionalRendering = () => {
    return (
        <div>
            <h1 className=' p-5 text-xl text-center font-bold text-blue-500 '> Conditional Rendering  </h1>
            <p>
                <b> Challenge 1 of 3: </b>Show an icon for incomplete items with ? :
                Use the conditional operator (cond ? a : b) to render a ❌ if isPacked isn’t true.
            </p>
            <PackingList />
            <p><b>Challenge 2 of 3:</b> Show the item importance with &&
                In this example, each Item receives a numerical importance prop. Use the && operator to render “(Importance: X)” in italics, but only for items that have non-zero importance. Your item list should end up looking like this:

                Space suit (Importance: 9)
                Helmet with a golden leaf
                Photo of Tam (Importance: 6)
                Don’t forget to add a space between the two labels!</p>

            <PackingList2 />

            <p><b>Challenge 3 of 3:</b> Refactor a series of ? : to if and variables
                This Drink component uses a series of ? : conditions to show different information depending on whether the name prop is "tea" or "coffee". The problem is that the information about each drink is spread across multiple conditions. Refactor this code to use a single if statement instead of three ? : conditions.</p>
                <DrinkList/>
        </div>
    )
}

export default ConditionalRendering

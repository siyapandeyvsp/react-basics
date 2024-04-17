import React from 'react'
import Scientists from './Scientists'
import RecipeList from './RecipeList'
import RecipeList2 from './RecipeList2'
import Poem from './Poem'

const RenderingLists = () => {
    return (
        <div>
            <h1 className=' p-5 text-xl text-center font-bold text-blue-500 '> Rendering Lists  </h1>
            <p>
                <b>Challenge 1 of 4:</b>
                Splitting a list in two
                This example shows a list of all people.

                Change it to show two separate lists one after another: Chemists and Everyone Else. Like previously, you can determine whether a person is a chemist by checking if person.profession === 'chemist'.
            </p>
            <Scientists />
            <p>
                <b> Challenge 2 of 4:</b>
                Nested lists in one component
                Make a list of recipes from this array!
                For each recipe in the array, display its name as an
                h2 and list its ingredients in a ul.

            </p>
            <RecipeList />
            <p>
                <b>Challenge 3 of 4:</b>
                Extracting a list item component
                This RecipeList component contains two nested map calls. To simplify it, extract a Recipe component from it which will accept id, name, and ingredients props. Where do you place the outer key and why?
            </p>
            <RecipeList2 />
            <p><b>Challenge 4 of 4: </b>List with a separator
                This example renders a famous haiku by Tachibana Hokushi, with each line wrapped in a p tag. Your job is to insert an hr / separator between each paragraph. Your resulting structure should look like this:
                A haiku only contains three lines, but your solution should work with any number of lines. Note that hr / elements only appear between the p elements, not in the beginning or the end!
            </p>
            <Poem />
        </div>
    )
}

export default RenderingLists

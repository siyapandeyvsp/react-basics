import React from 'react'
import { recipes } from '../data'
const RecipeList = () => {
  return (
    <div className='m-5 p-5 w-96 border-4 border-orange-400 bg-yellow-100 rounded-lg '>
      <h1 className='text-2xl text-center font-bold text-orange-500'>Recipes</h1>
      {recipes.map(recipe=>
      <div key={recipe.id}>
        <h2 className='text-xl font-semibold text-red-800'>{recipe.name}</h2>
        
        {recipe.ingredients.map(ingre=><li key={ingre}>{ingre}</li>)}
        
        </div>
    )}
        
    </div>
  )
}

export default RecipeList

import { recipes } from '../data'
const Recipe=({id , name , ingredients})=>{
return(
    <div 
    key={id}> 
        <h2 className='text-xl font-semibold text-green-800'>{name}</h2>
    {ingredients.map(ingre=><li key={ingre}>{ingre}</li>)}
    </div>
   
)
}
export default function RecipeList2() {
  return (
    <div className='m-5 p-5 w-96 border-4 border-green-400 bg-yellow-100 rounded-lg '>
      <h1 className='text-2xl text-center font-bold text-green-500'>Recipes</h1>
      {recipes.map(recipe =>
        <Recipe id={recipe.id} name={recipe.name} ingredients={recipe.ingredients}/>
      )}
    </div>
  );
}

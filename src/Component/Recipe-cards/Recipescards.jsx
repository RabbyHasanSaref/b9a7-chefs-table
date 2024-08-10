import { useEffect, useState } from "react";
import Recipe from "./Recipe";
const Recipescards = ({handelWant}) => {
    const [recipes, setRecipes] = useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/RabbyHasanSaref/resturent-json-api/main/json')
        .then(response => response.json())
        .then(data => {
            setRecipes(data)
            // console.log(data)
        })
    }, [])

    return (
        <div className="grid grid-cols-2 gap-10">
             {
                recipes.map(recipe => <Recipe 
                    key={recipe.recipe_id}
                     recipe={recipe} 
                     handelWant={handelWant}
                     ></Recipe>)
             }
        </div>
    );
};

export default Recipescards;
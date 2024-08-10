import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";
const Recipe = ({recipe, handelWant}) => {
    const { recipe_image, recipe_name, short_description, preparing_time, calories, ingredients} = recipe;
    // console.log(recipe)
    return (
        <div>
            {/* card itmes section  */}
            <div className="flex justify-between gap-5">
                {/* card one  */}
                <div className="text-left space-y-5 border-2 p-2 rounded-lg">
                    <img className="w-[300px] h-[300px] rounded-lg" src={recipe_image} alt="" />
                    <h4 className="text-base font-semibold">{recipe_name}</h4>
                    <p>{short_description}</p>
                    <div className="space-y-2">
                        <h4 className="text-base font-semibold">Ingredients: {ingredients.length}</h4>
                        {
                            ingredients.map((ingred, idx) => <li key={idx}>{ingred}</li>)
                        }
                    </div>
                    <div className="flex justify-between">
                        <p className="flex items-center gap-2"><IoMdTime /> {preparing_time} minutes</p>
                        <p className="flex items-center gap-2"><FaFire /> {calories} calories</p>
                    </div>
                    <div>
                        <button onClick={()=>{ handelWant(recipe); }} 
                            className="btn bg-green-500 rounded-[50px] text-base font-semibold">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;
const Card = ({cart, index, handelPreparing, hendelDelete}) => {
    const {recipe_id, recipe_name, preparing_time, calories} = cart;
    // console.log(cart)
    return (
        <div>
            {/* cart table section  */}
            <div>
                <table className="table">
                    <tbody>
                        <tr>
                            <td className="space-y-5">{index +1}</td>
                            <td className="space-y-5">{recipe_name}</td>
                            <td className="space-y-5">{preparing_time} minutes</td>
                            <td className="space-y-5">{calories} calories</td>
                            <button onClick={()=>handelPreparing(cart, recipe_id)} className="btn bg-green-500 rounded-[50px] mt-2">Preparing</button>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Card;
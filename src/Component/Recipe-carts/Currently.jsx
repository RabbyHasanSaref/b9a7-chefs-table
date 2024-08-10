const Currently = ({pre, index}) => {
    const {recipe_name, preparing_time, calories} = pre;
    return (
        <div>
            {/* cart table section  */}
            <table className="table">
                    <tbody>
                        <tr>
                            <td className="space-y-5">{index +1}</td>
                            <td className="space-y-5">{recipe_name}</td>
                            <td className="space-y-5">{preparing_time} minutes</td>
                            <td className="space-y-5">{calories} calories</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    );
};

export default Currently;
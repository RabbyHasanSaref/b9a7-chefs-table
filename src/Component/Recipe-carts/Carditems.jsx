import Card from "./Card";
import Currently from "./Currently";
const Carditems = ({card, handelPreparing, hendelDelete, preparing}) => {
    return (
        <div>
            <div className="mb-5 space-y-2 border-2 border-dotted">
            <h2 className="text-base font-semibold">Want to cook: {card.length}</h2>
            </div>

             {/* cart table section  */}
            <div className="overflow-x-auto">
                <table className="table">
                        <tr>
                            <th className="text-left">Name</th>
                            <th className="text-left">Time</th>
                            <th className="text-left">Calories</th>
                        </tr>
                </table>
            </div>
            {
                card.map((cart, index) => <Card key={cart.recipe_id} index={index} cart={cart} hendelDelete={hendelDelete} handelPreparing={handelPreparing}></Card>)
            }

            <div className="mt-10 space-y-2 border-2 border-dotted">
                <h2 className="text-base font-semibold">Currently cooking:  {preparing.length}</h2>
            </div>
            {/* cart table section  */}
          <div className="overflow-x-auto">
          <table className="table">
                        <tr>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                </table>
          </div>

             {
                preparing.map((pre, index) => <Currently key={pre} index={index} pre={pre}></Currently>)
             }
        </div>
    );
};

export default Carditems;
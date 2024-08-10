import { FaUserCircle } from "react-icons/fa";
const Header = () => {
    return (
        <div>
            {/* header container  */}
           <div className="flex justify-between items-center">
                {/* logo section  */}
                <div className="text-4xl font-bold">
                    <h1>Recipe Calories</h1>
                </div>

                {/* navbar section  */}
                <div className="text-base font-bold text-black">
                    <a className="mr-8" href="">Home</a>
                    <a className="mr-8" href="">Recipes</a>
                    <a className="mr-8" href="">About</a>
                    <a className="mr-8" href="">Search</a>
                </div>

                {/* search and profile section  */}
                <div className="flex justify-evenly items-center gap-5">
                    <div><input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs rounded-[50px] bg-[#f3f3f4]" /></div>
                    <div className="text-5xl text-green-500"><FaUserCircle /></div>
                </div>
           </div>

           {/* banner section  */}
           <div className="my-10 bg-slate-50 p-10 rounded-lg bg-[url('../banner.png')] bg-center bg-no-repeat" >
                <div className="py-10 space-y-5 w-[620px] mx-auto">
                    <h2 className="text-3xl font-semibold text-white">Discover an exceptional cooking class tailored for you!</h2>
                    <p className="text-base font-medium text-white">The first restaurant proprietor is believed to have been one A. Boulanger, a soup vendor, who opened his business in Paris in 1765. The sign above his door advertised restoratives</p>
                    <div className="flex justify-center gap-5">
                        <button className="btn rounded-[50px] bg-green-500 text-base font-semibold border-none">Explore Now</button>
                        <button className="btn rounded-[50px] bg-white border-black text-base font-semibold border-none">Our Feedback</button>
                    </div>
                </div>
           </div>

           {/* our recepis section  */}
           <div className="my-10">
                <div className=" space-y-5 w-[620px] mx-auto">
                    <h2 className="text-3xl font-semibold">Our Recipes</h2>
                    <p className="text-base font-medium">Boulanger operated a modest establishment; it was not until 1782 that La Grande Taverne de Londres, the first luxury restaurant, was founded in Paris. The owner, Antoine Beauvilliers,</p>
                </div>
           </div>
        </div>
    );
};

export default Header;
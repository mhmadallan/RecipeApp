import { useLocation } from 'react-router-dom'
import Footer from './Footer';
import Navbar from './Navbar';


function SingleRecipe() {

    //useLocation to call the state object that we saved in the navigate function in Card Component
    const location = useLocation();

    //dangerouslySetInnerHTML={{ __html: location.state.instructions}} to get rid of the html tags from the objects returned from the api
    return (
        <div className='h-full flex flex-col justify-center items-center gap-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500'>

            <Navbar />
            <h1 className=" text-slate-300 text-2xl font-myFont mt-40 border-2 rounded-xl border-slate-300 bg-slate-700 p-4 w-1/4 text-center">
                {location.state.title}
            </h1>
            <div className='mt-10 w-1/2 p-8 flex justify-center items-center overflow-hidden border-2 rounded-xl border-slate-700 text-lg tracking-wide bg-slate-700 text-slate-300'>
                <img src={location.state.image} alt={location.state.title} className=' w-96 h-96 rounded-full'></img>
                <div className=' text-left font-myFont w-1/2 mx-10 ' dangerouslySetInnerHTML={{ __html: location.state.instructions}}></div>

            </div>


            <Footer />
        </div>

    );
}

export default SingleRecipe;
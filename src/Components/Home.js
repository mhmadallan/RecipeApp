
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Footer from './Footer';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';



function Home() {

  // this react-router-dom hook is to route between pages
  const navigate = useNavigate();

  const navigateToRecipes = () => {
    // 👇️ navigate to /recipes the '/recipes' path was set in the App coponent in the Route tag
    navigate('/recipes');
  };
  
  //*** overflow-auto to make the background visible when the margin top/bottom is set in the inner div "the Card div" ***
  return (

    <div className="bg-[url('/img/food2.jpg')] bg-no-repeat overflow-hidden h-full" >
      <Navbar />

      <div className='h-screen w-full flex flex-col justify-center items-center'>
        <div className=' h-5/12 w-1/2 bg-slate-700 opacity-80 mx-36 border-4 rounded-3xl border-slate-300 mt-48'>
          <p className='flex justify-start ml-8 mt-4'> <ImQuotesLeft size={42} color={'#ffffff'} />  </p>
          <p className=' text-lime-300 text-5xl mx-16 mt-6 font-lobtwo'>Here you will find the best recipes in the world! </p>
          <p className=' text-lime-300 text-5xl mx-16 font-lobtwo'> You can step up and be amongst the greatest of all time in the cooking game. </p>
          <p className='flex justify-end mr-10 mt-0'><ImQuotesRight size={42} color={'#ffffff'} /></p>
          <p className=' text-white text-2xl mx-10 mb-10 font-myFont flex justify-center'> Gordon Ramsay</p>

        </div>

        <button className='h-24 bg-slate-700 mt-32 flex justify-center items-center 
        w-1/4 rounded-2xl opacity-80 text-white font-myFont text-2xl border-2 border-slate-300
        hover:bg-slate-500 active:scale-90 active:bg-slate-700'
          onClick={navigateToRecipes}>
          Check all recipes
        </button>
      </div>
   
      <Footer />
    </div>
  );
}

export default Home;

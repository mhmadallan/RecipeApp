
import {useNavigate} from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
      }
    const navigateToAbout = () => {
        navigate('/about')
    }
   
    const navigateToRecipes = () => {
        navigate('/recipes')
    }
    return (
        // to move items to the right the parent element (the wrapper) needs to have height and the other child needs to be floated left
        <div className="h-16 fixed w-full overflow-hidden opacity-80 bg-slate-700 shadow-lg text-white z-10 top-0">
            <div onClick={navigateToHome} className="float-left my-2 mx-14 w-24 h-12 flex justify-center items-center text-3xl cursor-pointer"> Tasty</div>
            <ul className="flex float-right mr-36  my-2 text-lg">
                <li onClick={navigateToHome} className="w-24 h-12 mx-6 flex active:bg-red-400 active:rounded-xl justify-center items-center cursor-pointer hover:opacity-50 hover:text-xl "> Home </li>
                <li onClick={navigateToAbout} className="w-24 h-12 mx-6 flex justify-center items-center cursor-pointer hover:opacity-50 hover:text-xl active:bg-red-400 active:rounded-xl"> About </li>
                <li onClick={navigateToRecipes} className="w-24 h-12 mx-6 flex justify-center items-center cursor-pointer hover:opacity-50 hover:text-xl active:bg-red-400 active:rounded-xl"> Recipes </li>
            </ul>
        </div>
    );
}

export default Navbar;

//* good practice to make recipe api and fetch the data from it 
// the api should include recipes array that will contain image, name, ingredients at least 10 objects in the array
// but first let's make an internal array that contains what we have mentioned above.
//* make some animation when the nav bar is being hovered  ****************** done
//* add footer with my social media links
// improve on the backrounds below
// when the card is clicked the recipe gets displayed the card gets rotated 180 on the x axis and the ingredients gets displayed
// when the page is scrolled down the navbar background color gets darker

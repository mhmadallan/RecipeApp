import {useNavigate} from 'react-router-dom'

function Card(props) {
    const navigate = useNavigate();
    const navigateToSingleRecipe =() => {
        // the second argument is the state object that will hold the props that will be passed to the SingleRecipe component
        navigate('/singleRecipe',{state:{title:props.recipe.title,instructions:props.recipe.instructions,image:props.recipe.image}})
    }
    //<img src={props.recipe.image} className=' w-full h-full overflow-hidden'/>
    return (
        <div onClick={navigateToSingleRecipe} className="hover:cursor-pointer text-lg border-2 rounded-3xl w-full h-72 flex justify-start items-start text-center shadow-lg font-myFont overflow-hidden"
            style={{ backgroundImage: `url("${props.recipe.image}")` }}>
            <div className=" flex justify-center items-center mt-4 text-center text-slate-700 bg-opacity-60 bg-slate-300 h-1/3 w-full px-2">{props.recipe.title}</div>


        </div>
    );
}

export default Card;
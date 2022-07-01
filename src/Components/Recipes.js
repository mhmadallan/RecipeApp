import { useState, useEffect } from 'react';
import Card from './Card';
import Footer from './Footer';
import Navbar from './Navbar';


function Recipes() {
    const [recipies, setRecipies] = useState([]);
    useEffect(() => {

        fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`)
            .then(response => response.json())
            .then(response => response.recipes)
           // the filter function was applied to the data that was returned from the api to only save the data that has images and its title length is less than 150 characters
            .then(response => setRecipies(response.filter(data => data.hasOwnProperty('image') && data.title.length < 150)))
           
            .catch(err => console.error(err));
    }, [])

// what's left is : - make use of all the buttons [the social media buttons, the navbar ]
// when the card is clicked the card gets flipped and the instruction will be written on the other side 

    console.log(recipies)
    // alt shift A to comment multiple lines 
    return (

        <div className='h-full flex flex-col justify-center items-center gap-20 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500'>
            <Navbar />

            <div className="grid grid-cols-3 gap-2 w-1/2 h-full justify-center items-center mt-72">
                {recipies.map(x => {
                    return (
                        <Card recipe={x} />
                    )
                })}
            </div>

            <Footer />
        </div>
    );
}

export default Recipes;
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recipes from './Components/Recipes';
import Home from './Components/Home';
import About from './Components/About';
import SingleRecipe from './Components/SingleRecipe';



// i made a mistake by deleting some packages unintentionally so i need to clone what i already saved in github and copy all the rest from here
function App() {

  //*** overflow-auto to make the background visible when the margin top/bottom is set in the inner div "the Card div" ***
  return (
  // these are used to set internal links and give them a path that will be used within the navigate function in the concerned component 
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path='/recipes' element={<Recipes/>}/>
      <Route exact path='/singleRecipe' element={<SingleRecipe/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

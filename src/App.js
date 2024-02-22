import './App.css';
import Home from './Components/Home';
import About from "./Components/About";
import Work from './Components/Work';
import Test from './Components/Test';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import {Routes,Route} from 'react-router-dom'
import Signup from './Loginpage/Signup';
import Explore from './Components/Explore';
import Vegetarian from './Components/Vegetarian';
import Nonvegetarian from './Components/Nonvegetarian';
import  Streetfoods  from './Components/Streetfoods';
import Kfc from './Components/Kfc';
import Payment from './Components/Payment';
function App() {
  return (
    <div className="App">
   {/* <Home/>
   <About/>
   <Work/>
  <Test/>
  <Contact/>
  <Footer/> */}
  <Routes >
    <Route path='/' element={<Signup/>}></Route>  
    {/* "/" This is the first Page */}
    <Route path='/Home' element={<Home/>}></Route>
    <Route path='/Footer' element={<Footer/>}></Route>
    <Route path='/Signup' element={<Signup/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/Footer' element={<Footer/>}></Route>
    <Route path='/Test' element={<Test/>}></Route>
    <Route path='/Work' element={<Work/>}></Route>
    <Route path='/Explore' element={<Explore />}></Route>
    <Route path='/Vegetarian' element={<Vegetarian/>}></Route>
    <Route path='/Nonvegetarian' element={<Nonvegetarian/>}></Route>
    <Route path='/Streetfoods' element={<Streetfoods/>}></Route>
    <Route path='/Kfc' element={<Kfc/>}></Route>
    <Route path='/Payment' element={<Payment/>}></Route>

    {/* these line means that when the "/filename" appears it should redirect to the that page */}
  </Routes>
    </div>
  );
}

export default App;

import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";


import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import Footer from "./Footer";
import logo from './images/logo.jpg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return(
    <div>  
  <Router> 
 <nav>
 <Link to="/pageOne">  <img src={logo} width="230px" height="70px" alt="logo"/> </Link>
  <Link className="navLink" to="/pageTwo"> Idées cadeaux pour Femme </Link>
  <Link className="navLink" to="/pageThree"> Idées cadeaux pour Homme </Link>
  <Link className="navLink" to="/pageFour"> Idées cadeaux pour Enfant </Link> 
</nav>

<Routes>
<Route path="/pageOne" element={<PageOne/>}/>
<Route path="/pageTwo" element={<PageTwo/>}/>
<Route path="/pageThree" element={<PageThree/>}/>
<Route path="/pageFour" element={<PageFour/>}/>

</Routes>

 </Router>
 <Footer/>

 </div>



  ); 
 


}
export default App;

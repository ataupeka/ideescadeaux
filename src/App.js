
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
 <Link to="/ideescadeaux">  <img src={logo} width="230px" height="70px" alt="logo"/> </Link>
  <Link className="navLink" to="/cadeaux_pour_femme"> Idées cadeaux pour Femme </Link>
  <Link className="navLink" to="/cadeaux_pour_homme"> Idées cadeaux pour Homme </Link>
  <Link className="navLink" to="/cadeaux_pour_enfant"> Idées cadeaux pour Enfant </Link> 
</nav>

<Routes>
<Route path="/ideescadeaux" element={<PageOne/>}/>
<Route path="/cadeaux_pour_femme" element={<PageTwo/>}/>
<Route path="/cadeaux_pour_homme" element={<PageThree/>}/>
<Route path="/cadeaux_pour_enfant" element={<PageFour/>}/>

</Routes>

 </Router>
 <Footer/>

 </div>



  ); 
 


}
export default App;

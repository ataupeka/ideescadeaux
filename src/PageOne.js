import Slide from "./Slide";
import rocket from './images/rocket.png'
import smile from './images/smile.png'
import gift from './images/gift-box.png'





function PageOne(){
    return<div>  
        <div className="container space">
        <h1>Idées cadeaux</h1> </div>
        <div className="container "><h2> A la recherche d'idées <span className="span"> cadeaux </span> pour vous ou pour un proche ?</h2></div>
        <div className="container space"><h3> Originalité, humour, feel good,
nous aimons partager notre bonne humeur, et donner de bonnes vibes tout autour de nous.</h3></div>

<div className="container space">
     <Slide/> 
</div>

<div className="container space"> <p className="text"> 
<span className="red">Noël </span>, <span className="orange">Anniversaire </span>, <span className="blue">Nais</span><span className="pink">sance…</span> Vous vous y prenez à la dernière minute pour choisir votre cadeau ? Pas de panique ! Que ce soit pour un homme, une femme ou un enfant, Idées cadeaux a sélectionné pour vous des idées cadeaux à acheter et offrir "Idées cadeaux de dernière minute" sans vous tromper.

Box, abonnement magazine ou TV, places de concert, cartes à gratter, cartes cadeaux… A vous de choisir selon les goûts de la personne à qui vous offrez ce joli cadeau.</p></div>


<div className="container space">
   <div className="container "> 
   <div className="icone">
    <div className="container "><img src={rocket} idth='100px' height='100px'/>  </div>

   <p className="pageOneP"> Livraison gratuite  à partir de $100</p> </div>
   </div> 


   <div className="container "> 
   <div className="icone">
   <div className="container "><img src={smile} width='100px' height='100px'/> </div>
   <p className="pageOneP"> Retour sous 30 jours</p>
   </div>
   </div>

   <div className="container space"> 
   <div className="icone">
   <div className="container "> <img src={gift} width='100px' height='100px'/> </div>
   <p className="pageOneP"> Du love dans vos commandes</p>
   </div>
   </div>


    </div>
</div>



}
export default PageOne;










    
     

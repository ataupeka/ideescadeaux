import { useState} from "react";
import { dataWomenItems } from './dataWomenItems';
import GiftsWomenItems from "./GiftsWomenItems";
import Buttons from "./Buttons";


function PageTwo() {

    const[gift, setGift]= useState(dataWomenItems);
    const chosenGift=(searchTerm)=> {
        const newGift= dataWomenItems.filter(element => element.searchTerm === searchTerm);
        setGift(newGift);
    }
  return (
    <div>  
    <div className="container">
      <Buttons filteredGift={chosenGift}/>
    </div>
      
    <div>
   <GiftsWomenItems article={gift}/>
    </div>
    </div>
  );
}

export default PageTwo;
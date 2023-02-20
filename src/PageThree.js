import { useState} from "react";
import { dataManItems } from './dataManItems';
import GiftsManItems from "./GiftsManItems";
import Buttons from "./Buttons";


function PageThree() {

    const[giftTwo, setGiftTwo]= useState(dataManItems);
    const chosenGiftTwo=(searchTerm)=> {
        const newGiftTwo= dataManItems.filter(elementManList => elementManList.searchTerm === searchTerm);
        setGiftTwo(newGiftTwo);
    }
  return (
    <div>  
    <div className="container">
      <Buttons filteredGift={chosenGiftTwo}/>
    </div>
      
    <div>
   <GiftsManItems articleManList={giftTwo}/>
    </div>
    </div>
  );
}

export default PageThree;
import { useState} from "react";
import { dataForKidsItems } from './dataForKidsItems';
import GiftsForKidsItems from "./GiftsForKidsItems";
import Buttons from "./Buttons";


function PageFour() {

    const[giftThree, setGiftThree]= useState(dataForKidsItems);
    const chosenGiftThree=(searchTerm)=> {
        const newGiftThree= dataForKidsItems.filter(elementForKidsList => elementForKidsList.searchTerm === searchTerm);
        setGiftThree(newGiftThree);
    }
  return (
    <div>  
    <div className="container">
      <Buttons filteredGift={chosenGiftThree}/>
    </div>
      
    <div>
   <GiftsForKidsItems articleForKidsList={giftThree}/>
    </div>
    </div>
  );
}

export default PageFour;
import { useState } from "react";
import { dataFirstPage } from './dataFirstPage';

function Slide() {
    const [page, setPage]= useState(0);


    const {image, description}=dataFirstPage[page];
    const previousPage=() =>{
        setPage(( page=> {
            page--;
            if (page <0){
                return dataFirstPage.length-1;

            }
            return page;
        }))
    }
    const nextPage =() =>{
        setPage(( page=> {
            page++;
            if (page> dataFirstPage.length-1){
                page=0;
            }
            return page;
        }))
    }
        return(
            <div> 
                <div>  
                <div>  <button className="button"  onClick={previousPage}>   </button> <img src={image} alt="heart"/> 
                <button  className="button" onClick={nextPage}></button>
                 </div>
                <p className="holiday container"> {description}</p>
              

                </div>
            </div>
        )
    }

export default Slide;
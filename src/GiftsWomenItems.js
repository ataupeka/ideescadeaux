function GiftsWomenItems({article}){
    return(

        <div className="product">
            {article.map(( element=> {
                const {id, name,price,image}= element;
                return(
                    <div className="container product-card" key={id}> 
                    <div cassName="position">
                    <div className="hover-image-scale">
                    <img src={image} width="350px" height="300px" alt="gift"/> </div>
                    <div className="product-info container"></div>
                   <div className="cont"> <h3 className="itemName"> {name}</h3> </div> 
                   <div className="cont"> <h4> $ {price}</h4> </div> 
                    
                    
                    </div>
                  </div>
                )
            }))
            
            }
        </div>

    )
}
export default GiftsWomenItems;
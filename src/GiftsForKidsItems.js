function GiftsForKidsItems({articleForKidsList}){
    return(

        <div className="product">
            {articleForKidsList.map(( elementForKidsList=> {
                const {id,name,price,image}= elementForKidsList;
                return(
                    <div className="container product-card" key={id}> 
                    <div cassName="position">
                    <div className="hover-image-scale">
                    <img src={image} width="350px" height="300px" alt="gift"/> </div>
                    <div className="product-info container"> </div>
                    <h3> {name} </h3>
                    <h4> $ {price} </h4>
                    
                    
                    </div>
                  </div>
                )
            }))
            
            }
        </div>

    )
}
export default GiftsForKidsItems;
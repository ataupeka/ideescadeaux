



function GiftsManItems({articleManList}){
    return(

        <div className="product">
            {articleManList.map(( elementManList=> {
                const {id,name,price,image}= elementManList;
                return(
                    <div className="container product-card" key={id}> 
                    <div cassName="position">
                    <div className="hover-image-scale">
                    <img src={image} width="350px" height="300px" alt="gift"/> </div>
                    <div className="product-info container"> </div>
                    <h3 className="cont"> {name} </h3>
                    <h4 className="cont"> $ {price} </h4>
                    
                    
                    </div>
                  </div>
                )
            }))
            
            }
        </div>

    )
}
export default GiftsManItems;



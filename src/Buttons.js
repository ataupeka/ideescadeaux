



function Buttons({filteredGift}){
    return(
<div className="container">
<button className='btn' onClick={() => filteredGift ("30")}> jusqu'à 30$ </button>
<button className="btn" onClick={() => filteredGift ("50")}> jusqu'à 50$ </button>
<button  className="btn"onClick={() => filteredGift ("100")}> jusqu'à 100$ </button>
<button className="btn"  onClick={() => filteredGift ("105")}> plus que 100$ </button>


</div>
)
}

export default Buttons;
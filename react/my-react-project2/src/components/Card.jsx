function Card(props){
    function orderFoodHandler(){
        let amount=0;
        if(props.priceInRupees<199){
            amount=props.priceInRupees;
        }
        else{
            amount=props.priceInRupees+40;
        }
        console.log('order successfu for ',props.title);
        console.log('total amount to be paid : Rs',amount);
    }
    return(
        <div className="card" onClick={orderFoodHandler}>
           <div className="card-header"> 
             <img src={props.imageUrl} alt="" className="card-img"/>
             <div className={props.ratings >=4.5 ? "try" : "none"}>Must Try </div>
           </div>
          <div className="flex">
              <h3 className="title">{props.title}</h3>
             {/*<div className={props.type=='nonveg'?"nonveg":"veg"}></div>*/}
          </div>
              <p className="price">{props.priceInRupees}</p>
              <p className="desc">{props.description}</p>
            
        </div>
    )
}
export default Card;
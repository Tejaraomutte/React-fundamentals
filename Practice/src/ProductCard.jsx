function ProductCard(person){
const titleStyle={
    fontsize: '20px',
    fontweight:'bold',
    color: 'blue'
}
const bodyStyle={
    fontsize:'20px',
    fontweight:'bold',
    color:'blueviolet'
}
    return(
        <div className="container">
            <p style={titleStyle}>The product available is {person.pName}</p>
            <p style={bodyStyle}>The price of the product is {person.price}</p>
            <p>{person.isAvailable === true ? <p className="true">In stock</p> : <p className="false">Out of stock</p>}</p> 
        </div>
    )
}
export default ProductCard;
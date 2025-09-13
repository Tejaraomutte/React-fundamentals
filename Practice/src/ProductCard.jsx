function ProductCard(products){
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
            <p style={titleStyle}>{products.productName}</p>
            <p style={bodyStyle}>{products.price}</p>
            <p style={trueStyle}>{products.isAvailable === true ? <p className="true">In stock</p> : <p className="false">Out of stock</p>}</p> 
        </div>
    )
}
export default ProductCard;
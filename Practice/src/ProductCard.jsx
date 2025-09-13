function ProductCard({pName,price,isAvailable}){

    return(
        <div>
            <p>The product available is {pName}</p>
            <p>The price of the product is {price}</p>
            <p>{isAvailable===true?"Product is in stock":"Product is out of stock"}</p>
        </div>
    )
}
export default ProductCard;
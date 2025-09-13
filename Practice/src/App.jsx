import Profile from "./Profile.jsx"
import ProductCard from "./ProductCard.jsx"

function App() {
  const productName="Smartphone"
  const price=42000
  const isAvailable=true

  return (
    <>
      <ProductCard pName={productName} price={price} isAvailable={isAvailable}/>
     
    </>
  )
}

export default App

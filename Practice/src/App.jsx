//import IDCard from "./IDCard.jsx"
import ProductCard from "./Productcard.jsx"
//import "./IDCard.css"
import "./App.css"
function App() {
   let person = {
     productName : "mobile",
     price : 8000,
     isAvailable : false,
     Available :true
 }
  //const proof={
   // Name:"MUTTE TEJASATHVIKA",
   // Course:"B.Tech",
   // RollNo:"23VV1A0534",
   // BloodGroup:"A +ve",
   // DOB:"06/07/2006"
 // }

  return (
    <div className="maincontainer">
      <ProductCard pName={person.productName} p={person.price} Available={person.isAvailable} />
      {/*<ProductCard pName={person.productName} p={person.price} Available={person.Available} /> */}
      {/*<IDCard Name={proof.Name} Course={proof.Course} RollNo={proof.RollNo} BloodGroup={proof.BloodGroup} DOB={proof.DOB}/> */}
    </div>
  )

}

export default App
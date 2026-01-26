import Button from "./components/button";
const App = () => {
const btns = ["Buy Now","Sell Now","Explore Now"]  
  
  return (
    // <div>
    //     <h1 class="text-3xl font-bold underline mt-10 bg-amber-300 p-10 w-1/2 flex justify-center items-center font" >App</h1>
  // </div>
  // elem means element  
  // <div>
  //    {arr.map((elem)=>
  //     {return <h1>{elem} is King</h1>}
  //     )}
  // // </div>  
  // <div className="btns">
  //    {/* <Button btnname="Buy Now" />  
  //  <Button btnname="Sell Now" />
  //  <Button btnname="Explore Now" /> */}
  // </div>  
  <div> {btns.map(function(elem)
    {return <Button btnname={elem} />})}
    </div>
 
)
}

export default App
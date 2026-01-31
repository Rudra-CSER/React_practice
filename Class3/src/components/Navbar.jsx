const Navbar = (props) => {
    console.log(props.color);
    
  return (
    <div style={{backgroundColor: props.color}} className="mb-1 flex justify-between items-center text-center py-3 px-8" >
        <h2 >{props.title}</h2>
        <div className="flex gap-5">
           {props.links.map((elem,idx) => (
            <h4 key={idx} className="text-sm">{elem}</h4>
           ))}
        </div>
    </div>
  )
}

export default Navbar
import Navbar from "./components/navbar";
import Davinchi from "./components/Davinchi";
import Adobe from "./components/adobe";
const App = () => {
  const user1 = {
    title: "Rudra",
    color: "apple",
    age: 20,
    links: ["Adobe"],
  };
  const user2 = {
    title: "Rudra",
    color: "green",
    links: ["Adobe"],
  };
  const user3 = {
    title: "Rudra",
    color: "green",
    links: ["Davinchi"],
  };

  return (
    (<>
      <div className="nav-bar ">
        <Navbar
          title="Rudra"
          color="green"
          links={["Home", "About", "Contact", "Services", "Products"]}
        />
        <Navbar
          title="Footer"
          color="gray"
          links={["Home", "Footer", "AS", "Accessories", "About"]}
        />
        <Navbar
          title="Store"
          color="Lightblue"
          links={["Home", "Men", "Women", "Kids", "Accessories"]}
        />
      </div>
    
  
      <div className="Users-pannel">
        {user1.links == "Adobe" ? (user1.age > 18 ? <Adobe /> : <Davinchi />) : (<Davinchi />)}
        {user2.links == "Adobe" ? <Adobe /> : <Davinchi />}
        {user3.links == "Adobe" ? <Adobe /> : <Davinchi />}
      </div>
      </>
    )
  );
};

export default App;

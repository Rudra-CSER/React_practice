import React, { useState } from "react";

const App = () => {
  // useState Hook: Creates state variable 'userName' (read-only) and 'setuserName' (updater function)
  // Initial value is empty string ''
  const [title, setTitle] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("")

  const [allUser, setallUser] = useState([]);


  // Form submission handler
  const submitHandler = (e) => {
    e.preventDefault(); // Prevents page reload on form submit
    // console.log(`Form Submitted and user name is ${userName}`);
    const newUser = [...allUser];
    newUser.push({title, email, phone});
    console.log(newUser);
    setallUser(newUser);


    setTitle(""); // Resets input field after submission
  };

  return (
    <div>
      {/* Form with onSubmit event handler */}
      <form className="card" onSubmit={(e) => submitHandler(e)}>
        {/* Controlled Input Pattern: React controls the input value via state */}
        {/* value={userName} - displays current state */}
        {/* onChange - updates state on every keystroke */}
        <input
          type="text"
          placeholder="Enter a title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter a email"
          value={email}
          required
          onChange={(e) => setemail(e.target.value)}
        />

         <input
          type="text"
          placeholder="Enter a phone"
          value={phone}
          required
          onChange={(e) => setphone(e.target.value)}
        />
        <button>Submit</button> 
      </form>

      {allUser.map((e,idx) => {
        return <div className="user-card" key={idx}>
          <h3 className="user-name">{e.title}</h3>
          <p className="user-email">{e.email}</p>
          <p className="user-phone">{e.phone}</p>
        </div>
      })}
    </div>
  );
};

export default App;

import React, { useState } from "react";

const App = () => {
  // useState Hook: Creates state variable 'userName' (read-only) and 'setuserName' (updater function)
  // Initial value is empty string ''
  const [userName, setuserName] = useState("");

  // Form submission handler
  const submitHandler = (e) => {
    e.preventDefault(); // Prevents page reload on form submit
    console.log(`Form Submitted and user name is ${userName}`);
  };

  return (
    <div>
      {/* Form with onSubmit event handler */}
      <form onSubmit={(e) => submitHandler(e)}>
        {/* Controlled Input Pattern: React controls the input value via state */}
        {/* value={userName} - displays current state */}
        {/* onChange - updates state on every keystroke */}
        <input
          type="text"
          placeholder="Enter a number"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
        />

        <button>Submit</button> 
        <button>Submit2</button>
      </form>
    </div>
  );
};

export default App;

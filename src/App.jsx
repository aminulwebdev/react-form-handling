import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState({
    fullname: "",
    phonenumber: "",
    email: "",
    address: "",
    password: "",
  });

  const [error, setError] = useState({
    fullname: "",
    phonenumber: "",
    email: "",
    address: "",
    password: "",
  });

  let inputHandle = (e) => {
    let { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  let submitHandle = (e) => {
    e.preventDefault();
    if (!text.fullname) {
      console.log("first name please");
    } else {
      console.log(text);
    }
  };
  return (
    <>
      <div className="input_box">
        <form action="">
          <input
            onChange={inputHandle}
            name="fullname"
            type="text"
            placeholder="full name"
          />

          <input
            onChange={inputHandle}
            name="phonenumber"
            type="text"
            placeholder="Phone number"
          />
          <input
            onChange={inputHandle}
            name="email"
            type="text"
            placeholder="email"
          />
          <input
            onChange={inputHandle}
            name="address"
            type="text"
            placeholder="address"
          />
          <input
            onChange={inputHandle}
            name="password"
            type="text"
            placeholder="password"
          />
          <button onClick={submitHandle}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default App;

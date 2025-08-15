import React, { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
function Register() {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const formsubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formdata);

      const response = await axios.post(
        "http://localhost:4000/api/users/registerUser",
        formdata
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form method="POST">
        <label>Username</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setformdata({ ...formdata, name: e.target.value })}
        ></input>

        <label>email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setformdata({ ...formdata, email: e.target.value })}
        ></input>

        <label>password</label>
        <input
          type="password"
          name="password"
          onChange={(e) =>
            setformdata({ ...formdata, password: e.target.value })
          }
        ></input>
        <button type="button" name="submit" onClick={(e) => formsubmit(e)}>
          submit
        </button>
      </form>
      <Link to={'/login'}>login</Link>
    </>
  );
}

export default Register;

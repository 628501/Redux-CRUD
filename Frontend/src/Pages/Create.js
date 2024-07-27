import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userDetails } from "../Services/UserService";

function Create() {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((currInp) => {
      return {
        ...currInp,
        [name]: value,
      };
    });
  };


  const addUser = async (e) => {
    e.preventDefault();
    try {
      await userDetails(formInput);
      navigate("/users");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New User</h3>
        <form>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="enter name"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              name="age"
              className="form-control"
              placeholder="enter age"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="enter email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="contact">Contact:</label>
            <input
              type="number"
              name="contact"
              className="form-control"
              placeholder="enter contact"
              onChange={handleChange}
            />
          </div>
          <br />
          <button onClick={addUser} className="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;

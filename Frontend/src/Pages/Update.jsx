import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../Services/UserService";
import { updateuser } from "../Slices/UserSlice";


const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.usersInfo.users);
  const user = users?.find((u) => u.id === parseInt(id));
  const dispatch = useDispatch();
  const navigate = useNavigate();

 const [name, setName] = useState(user.name);
 const [age, setAge] = useState(user.age);
 const [email, setEmail] = useState(user.email);
 const [contact, setContact] = useState(user.contact);



  const update = async (e) => {
    e.preventDefault();
    try {
      const users = await updateUser(id, name, age, email, contact);
      dispatch(updateuser(users));
      navigate("/users")
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={name}
              placeholder="enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              name="age"
              className="form-control"
              value={age}
              placeholder="enter age"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={email}
              placeholder="enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="contact">Contact:</label>
            <input
              type="number"
              name="contact"
              className="form-control"
              value={contact}
              placeholder="enter contact"
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <br />
          <button onClick={update} className="btn btn-info">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;

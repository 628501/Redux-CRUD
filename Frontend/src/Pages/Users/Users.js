import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { deleteUsers, displayUsers } from "../../Services/UserService";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUser } from "../../Slices/UserSlice";
import classes from "./Users.module.css";

const Users = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.usersInfo.users);
  const navigate = useNavigate();

  useEffect(() => {
    const getusers = async() => {
      try {
        const fetchUsers = await displayUsers();
        dispatch(getUser(fetchUsers));
      } catch (error) {
        console.log(error);
      }
     
    }
    getusers();
  },)
  
  const Delete = async(id) => {
    try {
      const users = await deleteUsers(id);
      dispatch(deleteUser(users));
      navigate("/users");
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <div className="container">
      <h2>Crud App with JSON Server</h2>
      <Link to="/" className={classes.shining}>Create +</Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>EMAIL</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.contact}</td>
              <td>
                <Link to={`/edit/${user.id}`} className="btn btn-sm btn-primary">Edit</Link>
                <button onClick={() => Delete(user.id)} className="btn btn-sm btn-danger ms-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

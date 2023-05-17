import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { TextField } from "@mui/material";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();   //retun the object of that id

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const { name, username, email, phone } = user;

  const handlechange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/users");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <TextField
                type={"text"}
                id="outlined-basic"
                label="name"
                variant="outlined"
                name="name"
                value={name}
                onChange={(e) => handlechange(e)}
              />
              <br />
              <br />
              <TextField
                type={"text"}
                id="outlined-basic"
                label="username"
                variant="outlined"
                name="username"
                value={username}
                onChange={(e) => handlechange(e)}
              />
              <br />
              <br />
              <TextField
                type={"text"}
                id="outlined-basic"
                label="email"
                variant="outlined"
                name="email"
                value={email}
                onChange={(e) => handlechange(e)}
              />
              <br />
              <br />
              <TextField
                type={"text"}
                id="outlined-basic"
                label="phone"
                variant="outlined"
                name="phone"
                value={phone}
                onChange={(e) => handlechange(e)}
              />
              <br />
              <br />
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                navigate("/users");
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

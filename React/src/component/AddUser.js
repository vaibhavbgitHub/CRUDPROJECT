import axios from "axios";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

export default function AddUser() {
  let navigate = useNavigate();

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

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/users");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

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

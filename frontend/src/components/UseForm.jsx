




import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import axios from "axios";

const UserForm = ({ setUser }) => {  
  const [user, setUserState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      axios.get(`http://localhost:5000/api/user/${encodeURIComponent(storedEmail)}`)
        .then(({ data }) => {
          if (data) {
            setUserState(data);
            setUser(data); 
          }
        })
        .catch(error => console.error(error));
    }
  }, [setUser]);  

  const handleChange = (e) => {
    setUserState({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      localStorage.setItem("userEmail", user.email);
      await axios.post("http://localhost:5000/api/users/save", user);
      setUser(user); 
      alert("Data saved successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Typography variant="h5">User Form</Typography>
      <TextField label="Name" name="name" value={user.name} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Email" name="email" value={user.email} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Phone" name="phone" value={user.phone} onChange={handleChange} fullWidth margin="normal" />
      <Button variant="contained" color="primary" onClick={handleSubmit}>Save</Button>
    </Container>
  );
};


export default UserForm;
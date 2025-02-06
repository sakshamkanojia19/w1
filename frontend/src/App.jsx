import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { AppBar, Toolbar, Button, Container } from "@mui/material";

function App() {
  return (
    <Router>
      <AppBar position="static" sx={{ backgroundColor: "#333" }}>
        <Toolbar>
          <Button color="inherit" component={Link} to="/" sx={{ mx: 1 }}>Home</Button>
          <Button color="inherit" component={Link} to="/profile" sx={{ mx: 1 }}>Profile</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

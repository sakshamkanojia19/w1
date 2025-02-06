import React, { useState } from "react";
import Counter from "../components/Counter";
import UserForm from "../components/UseForm";
import { Container } from "@mui/material";

const Home = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    textEditorData: "",
  });

  return (
    <Container>
      <Counter />
      <UserForm user={user} setUser={setUser} />
    </Container>
  );
};
export default Home;

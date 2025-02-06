import React, { useState } from "react";
import RichTextEditor from "../components/RichTextEditor";
import { Container } from "@mui/material";

const Profile = () => {
  const [user, setUser] = useState({ name: "", email: "", phone: "" ,textEditorData: ""});

  return (
    <Container>
      <RichTextEditor user={user} setUser={setUser} />
    </Container>
  );
};

export default Profile;
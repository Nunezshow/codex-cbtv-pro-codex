import React from "react";
import CreateUser from "./CreateUser";
import ProfileTest from "./ProfileTest";
import ListUsers from "./ListUsers";
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";

function App() {
  return (
    <div className="App">
      <h1>Media Hub</h1>
      <CreateUser />
      <ProfileTest />
      <ListUsers />
      <UpdateUser />
      <DeleteUser />
    </div>
  );
}

export default App;

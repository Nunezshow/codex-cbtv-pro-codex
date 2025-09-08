import React, { useState } from "react";
import CreateUser from "./CreateUser";
import ProfileTest from "./ProfileTest";
import ListUsers from "./ListUsers";
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";

function App() {
  const [activeTab, setActiveTab] = useState("create");

  const renderTab = () => {
    switch (activeTab) {
      case "create": return <CreateUser />;
      case "profile": return <ProfileTest />;
      case "list": return <ListUsers />;
      case "update": return <UpdateUser />;
      case "delete": return <DeleteUser />;
      default: return <CreateUser />;
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Media Hub Admin Dashboard</h1>

      {/* Navigation */}
      <div style={{ marginBottom: "20px" }}>
        {["create", "profile", "list", "update", "delete"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              marginRight: "10px",
              padding: "10px 20px",
              backgroundColor: activeTab === tab ? "#007bff" : "#eee",
              color: activeTab === tab ? "white" : "black",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} User
          </button>
        ))}
      </div>

      {/* Content */}
      <div>{renderTab()}</div>
    </div>
  );
}

export default App;

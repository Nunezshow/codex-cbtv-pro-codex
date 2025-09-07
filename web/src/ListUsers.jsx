import React, { useState } from "react";

export default function ListUsers() {
  const [users, setUsers] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await fetch(
        "https://ooedfo9dt6.execute-api.us-east-1.amazonaws.com/dev/users"
      );
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setUsers([{ error: err.message }]);
    }
  };

  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <h2>All Users</h2>
      <button onClick={fetchUsers}>List Users</button>

      {users && (
        <pre style={{ marginTop: "10px", background: "#f4f4f4", padding: "10px" }}>
          {JSON.stringify(users, null, 2)}
        </pre>
      )}
    </div>
  );
}

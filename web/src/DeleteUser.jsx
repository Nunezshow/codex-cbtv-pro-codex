import React, { useState } from "react";

export default function DeleteUser() {
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState(null);

  const handleDelete = async () => {
    if (!window.confirm(`Are you sure you want to delete user ${userId}?`)) return;

    try {
      const res = await fetch(
        `https://ooedfo9dt6.execute-api.us-east-1.amazonaws.com/dev/users/${userId}`,
        { method: "DELETE" }
      );
      const data = await res.json();
      setMessage(data.message || "Delete complete");
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      <input
        type="text"
        placeholder="Enter userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleDelete} style={{ backgroundColor: "red", color: "white" }}>
        Delete User
      </button>

      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
    </div>
  );
}

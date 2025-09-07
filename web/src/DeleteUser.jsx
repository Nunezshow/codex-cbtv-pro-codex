import React, { useState } from "react";

export default function DeleteUser() {
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState(null);

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `https://ooedfo9dt6.execute-api.us-east-1.amazonaws.com/dev/users/${userId}`,
        { method: "DELETE" }
      );
      const data = await res.json();
      setMessage(data.message || JSON.stringify(data));
    } catch (err) {
      console.error("Error deleting user:", err);
      setMessage(`Error: ${err.message}`);
    }
  };

  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <h2>Delete User</h2>
      <input
        type="text"
        placeholder="Enter userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete User</button>

      {message && (
        <p style={{ marginTop: "10px", fontWeight: "bold" }}>{message}</p>
      )}
    </div>
  );
}

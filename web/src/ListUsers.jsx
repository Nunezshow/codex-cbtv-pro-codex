import React, { useState } from "react";

export default function ListUsers() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await fetch(
        "https://ooedfo9dt6.execute-api.us-east-1.amazonaws.com/dev/users"
      );
      const data = await res.json();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch users");
      setUsers(null);
    }
  };

  return (
    <div>
      <h2>All Users</h2>
      <button onClick={fetchUsers} style={{ marginBottom: "10px" }}>
        Refresh List
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {users && (
        <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Playlists</th>
              <th>Watch History</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, idx) => (
              <tr key={idx}>
                <td>{u.userId}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.playlists?.join(", ")}</td>
                <td>{u.watchHistory?.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

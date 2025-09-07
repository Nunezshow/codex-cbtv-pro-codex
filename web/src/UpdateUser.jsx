import React, { useState } from "react";

export default function UpdateUser() {
  const [form, setForm] = useState({
    userId: "",
    name: "",
    email: "",
    playlists: "",
    watchHistory: "",
  });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://ooedfo9dt6.execute-api.us-east-1.amazonaws.com/dev/users/${form.userId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...(form.name && { name: form.name }),
            ...(form.email && { email: form.email }),
            ...(form.playlists && {
              playlists: form.playlists.split(",").map((p) => p.trim()),
            }),
            ...(form.watchHistory && {
              watchHistory: form.watchHistory.split(",").map((w) => w.trim()),
            }),
          }),
        }
      );
      const data = await res.json();
      setMessage(data.message || JSON.stringify(data));
    } catch (err) {
      console.error("Error updating user:", err);
      setMessage(`Error: ${err.message}`);
    }
  };

  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userId"
          placeholder="User ID (required)"
          value={form.userId}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="New Name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="New Email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="playlists"
          placeholder="Playlists (comma-separated)"
          value={form.playlists}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="watchHistory"
          placeholder="Watch History (comma-separated)"
          value={form.watchHistory}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Update User</button>
      </form>

      {message && (
        <p style={{ marginTop: "10px", fontWeight: "bold" }}>{message}</p>
      )}
    </div>
  );
}

import React, { useState } from "react";

export default function CreateUser() {
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
        "https://ooedfo9dt6.execute-api.us-east-1.amazonaws.com/dev/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: form.userId,
            name: form.name,
            email: form.email,
            playlists: form.playlists
              ? form.playlists.split(",").map((p) => p.trim())
              : [],
            watchHistory: form.watchHistory
              ? form.watchHistory.split(",").map((w) => w.trim())
              : [],
          }),
        }
      );
      const data = await res.json();
      setMessage(data.message || JSON.stringify(data));
    } catch (err) {
      console.error("Error creating user:", err);
      setMessage(`Error: ${err.message}`);
    }
  };

  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userId"
          placeholder="User ID"
          value={form.userId}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
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
        <button type="submit">Create User</button>
      </form>

      {message && (
        <p style={{ marginTop: "10px", fontWeight: "bold" }}>{message}</p>
      )}
    </div>
  );
}

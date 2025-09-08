import React, { useState } from "react";

export default function ProfileTest() {
  const [userId, setUserId] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    try {
      const res = await fetch(
        `https://ooedfo9dt6.execute-api.us-east-1.amazonaws.com/dev/users/${userId}`
      );
      if (!res.ok) throw new Error("User not found");
      const data = await res.json();
      setProfile(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setProfile(null);
    }
  };

  return (
    <div>
      <h2>Profile Lookup</h2>
      <input
        type="text"
        placeholder="Enter userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={fetchProfile}>Fetch</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {profile && (
        <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <h3>{profile.name}</h3>
          <p><b>Email:</b> {profile.email}</p>
          <p><b>Playlists:</b> {profile.playlists?.join(", ")}</p>
          <p><b>Watch History:</b> {profile.watchHistory?.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

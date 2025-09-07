import React, { useState } from "react";

export default function ProfileTest() {
  const [userId, setUserId] = useState("");
  const [profile, setProfile] = useState(null);

  const fetchProfile = async () => {
    try {
      const res = await fetch(
        `https://ooedfo9dt6.execute-api.us-east-1.amazonaws.com/dev/users/${userId}`
      );
      const data = await res.json();
      setProfile(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setProfile({ error: err.message });
    }
  };

  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <h2>Profile Test</h2>
      <input
        type="text"
        placeholder="Enter userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={fetchProfile}>Fetch Profile</button>

      {profile && (
        <pre style={{ marginTop: "10px", background: "#f4f4f4", padding: "10px" }}>
          {JSON.stringify(profile, null, 2)}
        </pre>
      )}
    </div>
  );
}

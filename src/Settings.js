import React, { useState } from "react";

export default function Settings({ maxQuestions, userProfile, onSave }) {
  const [numQuestions, setNumQuestions] = useState(userProfile?.numQuestions || 5);
  const [timePerQuestion, setTimePerQuestion] = useState(userProfile?.timePerQuestion || 10);

  const [username, setUsername] = useState(userProfile?.username || "");
  const [name, setName] = useState(userProfile?.name || "");
  const [email, setEmail] = useState(userProfile?.email || "");
  const [phone, setPhone] = useState(userProfile?.phone || "");

  const handleSave = () => {
    const newSettings = { numQuestions, timePerQuestion, username, name, email, phone };
    onSave(newSettings);
    alert("Settings saved!");
  };

  return (
    <div className="card">
      {/* Quiz Settings */}
      <div className="settings-block">
        <h3>Quiz Settings</h3>
        <label>Number of Questions:</label>
        <select value={numQuestions} onChange={(e) => setNumQuestions(Number(e.target.value))}>
          {[5, 10, 15, 20, 25].filter(n => n <= maxQuestions).map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>

        <label>Time per Question (seconds):</label>
        <select value={timePerQuestion} onChange={(e) => setTimePerQuestion(Number(e.target.value))}>
          {[5, 10, 15, 20].map(sec => (
            <option key={sec} value={sec}>{sec}s</option>
          ))}
        </select>
      </div>

      {/* Profile Settings */}
      <div className="settings-block">
        <h3>Edit Profile</h3>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /> <br />
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
        <label>Phone:</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} /> <br />
      </div>

      {/* About Developer */}
      <div className="settings-block">
        <h3>About the Developer</h3>
        <p>
          Developed by 2300032246. This is our MERN stack project. <br />
          Contact: 2300032246@kluniversity.in
        </p>
      </div>

      <button onClick={handleSave} style={{ marginTop: "20px" }}>Save</button>
    </div>
  );
}

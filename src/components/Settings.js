import React from "react";

function Settings() {
  return (
    <div style={styles.container}>
      <h2>Settings Page</h2>
      <p>This is where user settings can be configured.</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
};

export default Settings;

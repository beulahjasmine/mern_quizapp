import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} MERN Stack Project Prototype - Quiz App (2300032246 & 2300032608)
      </p>
      <div style={styles.links}>
        <a href="/" style={styles.link}>Privacy Policy</a> |{" "}
        <a href="/" style={styles.link}>Terms of Service</a> |{" "}
        <a href="/" style={styles.link}>Contact Us</a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#007BFF",
    color: "#fff",
    textAlign: "center",
    padding: "20px 10px",
    fontFamily: "Arial, sans-serif",
  },
  links: {
    marginTop: "8px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    margin: "0 5px",
  },
};

export default Footer;

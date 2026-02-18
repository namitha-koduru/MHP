import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios
      .get("https://mhp-backend-v88j.onrender.com")
      .then((res) => setMessage(res.data.message))
      .catch((err) => {
        console.error(err);
        setMessage("Error connecting to backend");
      });
  }, []);

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #4f46e5, #9333ea)"
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "20px",
        textAlign: "center",
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
      }}>
        <h1>MHP Project</h1>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;

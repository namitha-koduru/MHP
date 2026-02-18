import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/status")
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>MHP Home</h1>
      <p>{message}</p>
    </div>
  );
}

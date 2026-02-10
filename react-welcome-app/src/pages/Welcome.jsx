// import React from 'react';
import { useNavigate } from "react-router-dom";
import SendButton from "../components/SendButton";

const Welcome = () => {
  const name = "Chinnu";
  const navigate = useNavigate();

  const handleSend = () => {
    navigate("/thank-you", { state: { name } });
  };

  return (
    <div className="app-center">
      <div className="card magical">
        <div className="stars" aria-hidden="true" />
        <h1 className="magical-title">
          Welcome to a little world where{" "}
          <span className="accent">Chintu’s love</span> makes everything
          beautiful for <span className="accent">Chinnu</span> 🌙✨
        </h1>
        <p className="subtitle">
          Warning ⚠️ Clicking Below Button may cause smiles and butterflies 🦋
        </p>

        <SendButton onClick={handleSend} />
      </div>
    </div>
  );
};

export default Welcome;

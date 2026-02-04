// import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SendButton from '../components/SendButton';

const Welcome = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSend = () => {
    if (!name.trim()) {
      setError('Name is required');
      return;
    }
    setError('');
    navigate('/thank-you', { state: { name } });
  };

  return (
    <div className="app-center">
      <div className="card magical">
        <div className="stars" aria-hidden="true" />
        <h1 className="magical-title">
          Welcome to a little world where <span className="accent">Chintu’s love</span> makes everything beautiful for <span className="accent">Chinnu</span> 🌙✨
        </h1>
        <p className="subtitle">Enter your name below and let the magic begin😜</p>

        <input
          className="name-input"
          value={name}
          onChange={(e) => { setName(e.target.value); if (error) setError(''); }}
          placeholder="Your name"
          aria-label="Your name"
        />

        {error && <div className="error">{error}</div>}

        <SendButton onClick={handleSend} />
      </div>
    </div>
  );
};

export default Welcome;
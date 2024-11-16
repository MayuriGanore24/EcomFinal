import React, { useState } from 'react';
import email_icon from '../Assets/email.png';
import './LostPassword.css';

const LostPassword = ({ onBack }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset Password for:", { email });
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Reset Password</div>
        <div className='underline'></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='inputs'>
          <div className='input'>
            <img src={email_icon} alt="Email Icon" />
            <input
              type="email"
              placeholder="Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="submit-container">
          <button
            type="submit"
            className="submit"
          >
            Reset Password
          </button>
          <button
            type="button"
            className="submit gray"
            onClick={onBack}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default LostPassword;

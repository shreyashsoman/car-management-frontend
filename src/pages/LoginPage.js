import React, { useState } from 'react';
import { loginUser } from '../services/authService';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const credentials = { username, password };
      const data = await loginUser(credentials);
      localStorage.setItem('token', data.token); // Save token for authenticated requests
      setMessage("Login successful!");
    } catch (error) {
      setMessage(`Error: ${error}`);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default LoginPage;

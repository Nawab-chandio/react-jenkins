import React from 'react';
import Button from './components/Button';

const Signup: React.FC = () => {
  return (
    <div style={{
      display: 'flex',  
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      marginTop: '60px' 
    }}>
      <h2>Signup</h2>
      <input type="text" placeholder="Username" style={{ marginBottom: '10px', padding: '8px', width: '200px' }} />
      <input type="email" placeholder="Email" style={{ marginBottom: '10px', padding: '8px', width: '200px' }} />
      <input type="password" placeholder="Password" style={{ marginBottom: '10px', padding: '8px', width: '200px' }} />
      <Button ButtonName="Signup" />
    </div>
  );
};

export default Signup;
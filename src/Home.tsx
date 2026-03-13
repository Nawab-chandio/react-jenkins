import React from 'react';

const Home: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      marginTop: '60px'
    }}>
      <h1>Welcome to the Home Page</h1>
      <p>Use the buttons in the header to navigate.</p>
    </div>
  );
};

export default Home;

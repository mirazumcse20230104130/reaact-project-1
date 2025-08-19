import React from 'react';
import Login from './components/Login';
import UserProfile from './components/UserProfile'; // Correct case sensitivity

import './index.css'; // Adjusted the import path

function App() {
  return (
    <div>
      <Login />
      {/* Uncomment and use correctly capitalized component if needed */}
      <UserProfile />
    </div>
  );
}

export default App;

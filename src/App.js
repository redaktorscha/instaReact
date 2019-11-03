import React from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import Profile from './components/Profile';

//react-app
function App() {
  return (
    <div className="App">
      <Header/>
      <Feed/>
      <Profile/>
    </div>
  );
};

export default App;

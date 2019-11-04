import React from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import Profile from './components/Profile';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//react-app
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route path='/' component={Feed} exact />
        <Route path='/profile/' component={Profile} />        
      </div>
    </Router>
  );
};

export default App;

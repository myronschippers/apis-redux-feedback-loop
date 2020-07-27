import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import { HashRouter as Router, Route } from 'react-router-dom';
import FeelingPage from '../pages/FeelingPage/FeelingPage';
import UnderstandingPage from '../pages/UnderstandingPage/UnderstandingPage';
import SupportPage from '../pages/SupportPage/SupportPage';
import CommentsPage from '../pages/CommentsPage/CommentsPage';
import ReviewPage from '../pages/ReviewPage/ReviewPage';
import ThankYouPage from '../pages/ThankYouPage/ThankYouPage';

// TODO - SETUP router for 6 pages

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
          <Route exact path="/" component={FeelingPage} />
          <Route exact path="/understanding" component={UnderstandingPage} />
          <Route exact path="/support" component={SupportPage} />
          <Route exact path="/comments" component={CommentsPage} />
          <Route exact path="/review" component={ReviewPage} />
          <Route exact path="/thank-you" component={ThankYouPage} />

        </div>
      </Router>
    );
  }
}

export default App;

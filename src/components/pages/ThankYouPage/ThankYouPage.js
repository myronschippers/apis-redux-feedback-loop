import React, { Component } from 'react';

class ThankYouPage extends Component {
  handleClickStartOver = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h2>Thank You</h2>
        <button onClick={this.handleClickStartOver}>Leave New Feedback</button>
      </div>
    );
  }
}

export default ThankYouPage;
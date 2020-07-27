import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThankYouPage extends Component {
  handleClickStartOver = () => {
    this.props.dispatch({
      type: 'CLEAR_FEEDBACK',
    })
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

export default connect()(ThankYouPage);
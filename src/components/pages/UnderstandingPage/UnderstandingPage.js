import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnderstandingPage extends Component {
  handleClickNext = () => {
    this.props.history.push('/support');
    this.props.dispatch({
      type: 'ADD_UNDERSTANDING',
      payload: 3,
    });
  }

  render() {
    return (
      <div>
        <h2>Understanding?</h2>
        <button onClick={this.handleClickNext}>Next</button>
      </div>
    );
  }
}

export default connect()(UnderstandingPage);
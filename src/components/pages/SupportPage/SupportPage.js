import React, { Component } from 'react';
import { connect } from 'react-redux';

class SupportPage extends Component {
  handleClickNext = () => {
    this.props.history.push('/comments');
    this.props.dispatch({
      type: 'ADD_SUPPORT',
      payload: 4
    });
  }

  render() {
    return (
      <div>
        <h2>Support?</h2>
        <button onClick={this.handleClickNext}>Next</button>
      </div>
    );
  }
}

export default connect()(SupportPage);
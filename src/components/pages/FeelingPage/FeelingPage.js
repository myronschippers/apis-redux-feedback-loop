import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeelingPage extends Component {
  handleClickNext = () => {
    this.props.history.push('/understanding');
    this.props.dispatch({
      type: 'ADD_FEELING',
      payload: 2
    });
  }

  render() {
    return (
      <div>
        <h2>Feelings?</h2>
        <button onClick={this.handleClickNext}>Next</button>
      </div>
    );
  }
}

// currying => connect()()
export default connect()(FeelingPage);
import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnderstandingPage extends Component {
  state = {
    understandingEntered: '',
  }

  handleClickNext = () => {
    this.props.history.push('/support');
    this.props.dispatch({
      type: 'ADD_UNDERSTANDING',
      payload: parseInt(this.state.understandingEntered),
    });
  }

  handleChangeField = (event) => {
    this.setState({
      understandingEntered: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>How well are you understanding the content?</h2>
        <label htmlFor="understanding">Understanding?</label>
        <input
          id="understanding"
          type="number"
          placeholder="Number between 1 and 5"
          onChange={this.handleChangeField}
        />
        <button onClick={this.handleClickNext}>Next</button>
      </div>
    );
  }
}

export default connect()(UnderstandingPage);
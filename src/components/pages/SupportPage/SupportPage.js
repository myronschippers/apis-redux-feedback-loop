import React, { Component } from 'react';
import { connect } from 'react-redux';

class SupportPage extends Component {
  state = {
    supportEntered: '',
  }

  handleClickNext = () => {
    this.props.history.push('/comments');
    this.props.dispatch({
      type: 'ADD_SUPPORT',
      payload: parseInt(this.state.supportEntered),
    });
  }

  handleChangeField = (event) => {
    this.setState({
      supportEntered: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>How well are you being supported?</h2>
        <label htmlFor="support">Support?</label>
        <input
          id="support"
          type="number"
          placeholder="Number between 1 and 5"
          onChange={this.handleChangeField}
        />
        <button onClick={this.handleClickNext}>Next</button>
      </div>
    );
  }
}

export default connect()(SupportPage);
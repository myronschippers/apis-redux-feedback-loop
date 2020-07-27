import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeelingPage extends Component {
  state = {
    feelingEntered: '',
  }

  handleClickNext = () => {
    if (this.state.feelingEntered === '' || !this.state.feelingEntered) {
      alert('A score must be entered for feeling.');
      return;
    }

    this.props.history.push('/understanding');
    this.props.dispatch({
      type: 'ADD_FEELING',
      payload: parseInt(this.state.feelingEntered),
    });
  }

  handleChangeField = (event) => {
    this.setState({
      feelingEntered: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>How are you feeling today?</h2>
        <label htmlFor="feelings">Feeling?</label>
        <input
          id="feelings"
          type="number"
          placeholder="Number between 1 and 5"
          onChange={this.handleChangeField}
        />
        <button onClick={this.handleClickNext}>Next</button>
      </div>
    );
  }
}

// currying => connect()()
export default connect()(FeelingPage);
import React, { Component } from 'react';

class FeelingPage extends Component {
  handleClickNext = () => {
    this.props.history.push('/understanding');
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

export default FeelingPage;
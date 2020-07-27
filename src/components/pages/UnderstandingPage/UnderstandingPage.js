import React, { Component } from 'react';

class UnderstandingPage extends Component {
  handleClickNext = () => {
    this.props.history.push('/support');
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

export default UnderstandingPage;
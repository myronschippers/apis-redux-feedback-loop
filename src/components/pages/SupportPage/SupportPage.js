import React, { Component } from 'react';

class SupportPage extends Component {
  handleClickNext = () => {
    this.props.history.push('/comments');
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

export default SupportPage;
import React, { Component } from 'react';

class CommentsPage extends Component {
  handleClickNext = () => {
    this.props.history.push('/review');
  }

  render() {
    return (
      <div>
        <h2>Comments?</h2>
        <button onClick={this.handleClickNext}>Next</button>
      </div>
    );
  }
}

export default CommentsPage;
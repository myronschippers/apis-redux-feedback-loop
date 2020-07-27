import React, { Component } from 'react';

class ReviewPage extends Component {
  handleClickSubmit = () => {
    this.props.history.push('/thank-you');
  }

  render() {
    return (
      <div>
        <h2>Review?</h2>
        <button onClick={this.handleClickSubmit}>Submit</button>
      </div>
    );
  }
}

export default ReviewPage;
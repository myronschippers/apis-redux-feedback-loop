import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewPage extends Component {
  handleClickSubmit = () => {
    this.props.history.push('/thank-you');
  }

  render() {
    return (
      <div>
        <h2>Review?</h2>
        <p>Feelings: {this.props.store.feedbackReducer.feeling}</p>
        <p>Understanding: {this.props.store.feedbackReducer.understanding}</p>
        <p>Support: {this.props.store.feedbackReducer.support}</p>
        <p>Comments: {this.props.store.feedbackReducer.comments}</p>
        <button onClick={this.handleClickSubmit}>Submit</button>
      </div>
    );
  }
}

const putStoreOnProps = (store) => {
  return {
    store,
  }
}
export default connect(putStoreOnProps)(ReviewPage);
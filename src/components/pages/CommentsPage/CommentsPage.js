import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentsPage extends Component {
  handleClickNext = () => {
    this.props.history.push('/review');
    this.props.dispatch({
      type: 'ADD_COMMENTS',
      payload: 'Some Comments'
    });
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

export default connect()(CommentsPage);
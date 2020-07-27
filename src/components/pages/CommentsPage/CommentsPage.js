import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentsPage extends Component {
  state = {
    commentsEntered: '',
  }

  handleClickNext = () => {
    this.props.history.push('/review');
    this.props.dispatch({
      type: 'ADD_COMMENTS',
      payload: this.state.commentsEntered,
    });
  }

  handleChangeField = (event) => {
    this.setState({
      commentsEntered: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Comments?</h2>
        <label htmlFor="comments">Comments?</label>
        <input
          id="comments"
          type="text"
          placeholder="Enter any comments you may have."
          onChange={this.handleChangeField}
        />
        <button onClick={this.handleClickNext}>Next</button>
      </div>
    );
  }
}

export default connect()(CommentsPage);
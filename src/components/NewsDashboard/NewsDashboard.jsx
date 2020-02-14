import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createArticle } from '../../actions/newsActions';

export class NewsDashboard extends Component {
  componentDidMount() {
    console.log(this.props.news);
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <h1 className="display-4 mb-3">test!</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news
});

export default connect(mapStateToProps, {
  createArticle
})(NewsDashboard);

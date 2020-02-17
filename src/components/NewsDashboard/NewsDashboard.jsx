import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createArticle } from '../../actions/newsActions';

import NewsCard from '../NewsCard/NewsCard';

export class NewsDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  handleCreate = e => {
    this.setState({ redirect: true });
  };

  

  render() {
    const { news } = this.props.news;

    let content = '';
    content = (news && news.length > 0)
      ? news
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
        .map((article, index) => (
          <NewsCard key={index} title={article.title} body={article.body} author={article.author} date={article.date} timestamp={article.timestamp} />
        ))
      : <h1>All Quiet on the Western Front!</h1>;

    if (this.state.redirect == true) {
      return <Redirect to='/news/create' />;
    }
    else {
      return (
        <div>
          <button className="btn btn-primary" style={{ margin: "20px", padding: "5px" }} onClick={() => this.handleCreate()}>
            Create Article
            </button>
          <div className="jumbotron text-center">
            {content}
          </div>
        </div>

      );
    }

  }
}

const mapStateToProps = state => ({
  news: state.news
});

export default connect(mapStateToProps, {
  createArticle
})(NewsDashboard);

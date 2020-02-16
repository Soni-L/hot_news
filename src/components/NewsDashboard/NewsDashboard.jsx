import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createArticle } from '../../actions/newsActions';

import NewsCard from '../NewsCard/NewsCard';

export class NewsDashboard extends Component {
  componentDidMount() {
    
  }

  render() {
    const { news } = this.props.news;
    let content = '';
    content = (news && news.length > 0)
        ? news.map((article, index) => (
          <NewsCard key={index} title={article.title} body={article.body} author={article.author} date={article.date} timestamp={article.timestamp} />
        ))
        : <h1>All Quiet on the Western Front!</h1>;

    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        {content}
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

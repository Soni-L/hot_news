import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createArticle } from '../../actions/newsActions';

import NewsCard from '../NewsCard/NewsCard';

export class NewsDashboard extends Component {
  componentDidMount() {
    
  }

  render() {
    console.log( "in today's news: ");
    console.log(  this.props.news.news);

    const { news } = this.props.news;
    let content = '';
    content = (news && news.length > 0)
        ? news.map((article, index) => (
          <NewsCard key={index} title={article.title} body={article.body} />
        ))
        : null;

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

import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import './NewsCard.styles.scss';

export class NewsCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    };
  }
  handleClick = event => {
    this.props.history.push("/news/");
  };

  render() {
    const { title, body, author, date, timestamp } = this.props;
    return (
      <Link to={`/news/${timestamp}`}>
        <div className="news-card-class col-md-12">
          <h2>
            {title}
          </h2>
          <p>
            {author ? "author: " + author : ''}
          </p>
          <p>
            {date ? "published on: " + date : '' }
          </p>
        </div>
      </Link>

    );
  }
}

export default withRouter(NewsCard);

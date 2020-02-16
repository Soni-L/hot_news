import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import moment from 'moment';

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

    let friendlyDate = moment(date).format('h:mm:ss A, MMM-DD-YYYY');


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
            {friendlyDate}
          </p>
        </div>
      </Link>

    );
  }
}

export default withRouter(NewsCard);

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

    componentDidMount() {
      console.log("article_display");
    }
  
    handleClick = event => {
        this.props.history.push("/news/");
    };
  
    render() {
    const { title, body } = this.props;
      return (
        <div className="news-card-class col-md-12">
          <h2>
            {title}
          </h2>
          <h5>
            {body}
          </h5>  
          <button
            onClick={() => this.handleClick}
            className="btn btn-primary btn-bg mt-3"
          >
            Delete Article
          </button>
      </div>
      );
    }
  }

 export default withRouter(NewsCard);

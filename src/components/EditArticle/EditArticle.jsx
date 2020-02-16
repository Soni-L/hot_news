import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import moment from 'moment';

import { deleteArticle } from '../../actions/newsActions';

export class EditArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  handleDelete = (event, id) => {
    this.props.deleteArticle(id);
  };

  render() {
    const timestamp = this.props.match.params.id;
    const newsArticle = this.props.news.news.find((element) => element.timestamp == timestamp);
    if (newsArticle) {
      const { title, body, author, date } = newsArticle;

      let friendlyDate = moment(date).format('h:mm:ss A, MMM-DD-YYYY');

      return (
        <div className="jumbotron jumbotron-fluid mt-5 new-article">
          <div className="col-md-12">
            <h2>
              {title}
            </h2>
            <textarea disabled style={{width : '500px', height : '200px'}}>
              {body}
            </textarea>
            <p>
              {author ? "author: " + author : ''}
            </p>
            <p>
              {friendlyDate}
            </p>
            <button className='btn btn-primary' onClick={(e) => this.handleDelete(e, timestamp)}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    else {
      // return (<div>
      //   <h1 style={{ textAlign: 'center', color : 'red' }}>
      //     The article you are looking for, has been deleted or does not exist!
      //   </h1>
      // </div>)
      return <Redirect to='/news' />;
    }

  }
}

const mapStateToProps = state => ({
  news: state.news
});

export default withRouter(connect(mapStateToProps, {
  deleteArticle
})(EditArticle));

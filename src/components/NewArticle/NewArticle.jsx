import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createArticle } from '../../actions/newsActions';

import './NewArticle.styles.scss';

export class NewArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    };
  }
  componentDidMount() {
    //console.log(this.props.news);
  }

  handleSubmit = event => {
    event.preventDefault();
    let timestamp = new Date().getTime();
    this.props.createArticle({ title: this.state.title, body: this.state.body, author: this.state.author , date : this.state.date, timestamp : timestamp});
    this.props.history.push("/news");  
    // this.setState({ title: '', body: '', author: '', date : '' , author: ''});
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 new-article">

        <form className="create-article-form" onSubmit={this.handleSubmit}>
          <h2>Create a new article</h2>

          <input
            className="input-form"
            style={{ width: '500px' }}
            name="title"
            type="text"
            value={this.state.title}
            placeholder="Headline"
            onChange={this.handleChange}
            required
          />

          <textarea
            className="input-form"
            style={{ width: '500px', height: "200px" }}
            name="body"
            type="textarea"
            value={this.state.body}
            onChange={this.handleChange}
            placeholder="Description"
            required
          />

          <input
            className="input-form"
            name="author"
            type="text"
            value={this.state.author}
            placeholder="Author"
            onChange={this.handleChange}
          />

          <input
            className="input-form"
            name="date"
            type="datetime-local"
            value={this.state.date}
            placeholder="Date"
            onChange={this.handleChange}
          />

          <input className='input-form' type="submit" value="Create" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  news: state.news
});

export default withRouter(connect(mapStateToProps, {
  createArticle
})(NewArticle));

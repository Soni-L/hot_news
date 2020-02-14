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
    this.props.createArticle({ title: this.state.title, body: this.state.body });
    this.props.history.push("/news");
    this.setState({ title: '', body: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="new-article">
        <h2>Create a new article</h2>

        <form onSubmit={this.handleSubmit}>
          <input
            className="input-form"
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            label="title"
            required
          />
          <input
            className="input-form"
            name="body"
            type="textarea"
            value={this.state.body}
            onChange={this.handleChange}
            label="body"
            required
          />

          <input type="submit" value="Submit" />
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

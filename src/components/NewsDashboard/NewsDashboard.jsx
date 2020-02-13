import React, { Component } from "./node_modules/react";

import { connect } from "./node_modules/react-redux";
import { Table, Divider, Tag, Button } from "./node_modules/antd";
import { createArticle } from "../../actions/newsActions";
import axios from "./node_modules/axios";

import "./node_modules/antd/dist/antd.css";

export class NewsDashboard extends Component {
    componentDidMount() {
       console.log(this.state);
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <h1 className="display-4 mb-3">Dis is da News!</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    news: state.news
});

export default connect(mapStateToProps, {
    createArticle,
})(NewsDashboard);

import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.hightLight = {backgroundColor: "red"};
  }
  
 render() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link style={this.props.location.pathname.toString() == '/' ? this.hightLight : {}} className="navbar-brand text-white text-lg brand-text" to="/">
             HOME
            </Link>
            <Link style={this.props.location.pathname.toString() == '/news' ? this.hightLight : {} }
              className="navbar-brand text-white text-lg brand-text"
              to="/news"
            >
              NEWS
            </Link>
            <Link style={this.props.location.pathname.toString() == '/news/create' ? this.hightLight : {} }
              className="navbar-brand text-white text-lg brand-text"
              to="/news/create"
            >
              CREATE
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

}

export default withRouter(Navbar);

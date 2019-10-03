import React, { Component } from 'react';
import { Nav } from 'reactstrap';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
      <div className="col-11">
        <h5>hruday@gmail.com</h5>
      </div>
      <div className="col-1">
        <Nav className="" navbar>
          <span className="navbar-nav nav-link cursor">
            <i onClick={e => this.props.onLogout(e)} title="Logout" className="fa logoutButton fa-sign-out fa-2x ml-40" />
          </span>
        </Nav>
      </div>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;

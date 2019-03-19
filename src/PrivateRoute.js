import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  withRouter,
  Route,
  Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux';
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

class PrivateRoute extends Component {
  componentWillUpdate() {
    nprogress.start()
  }

  componentDidUpdate() {
    nprogress.done()
  }

  render() {
    const { component: Component, isAuthenticated, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => (isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        ))}
      />
    );
  }
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.any.isRequired,
  component: PropTypes.any.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default withRouter(connect(mapStateToProps)(PrivateRoute));

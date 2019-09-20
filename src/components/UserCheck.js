import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { registerUser } from "../actions";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

export class UserCheck extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const userData = {
      name: this.state.username
    };
    this.props.registerUser(userData, this.props.history);
  }
  render() {
    const { names } = this.props.names;
    console.log(names.status);
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Enter Username</h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": names.available === false
                    })}
                    placeholder="Enter new Username"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                  {names.available === false && (
                    <div className="invalid-feedback">{names.message}</div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
UserCheck.propTypes = {
  registerUser: PropTypes.func.isRequired,
  names: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  names: state.names,
  user: state.user
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(UserCheck));

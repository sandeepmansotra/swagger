import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { withRouter } from "react-router-dom";
import { registerUsers } from "../actions";
import PropTypes from "prop-types";

export class UserRegister extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      middle_name: "",
      last_name: "",
      username: "",
      email: "",
      primary_phone: "",
      password: "",
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
      first_name: this.state.first_name,
      middle_name: this.state.middle_name,
      last_name: this.state.last_name,
      username: this.state.username,
      primary_phone: this.state.primary_phone,
      email: this.state.email,
      password: this.state.password
    };
    this.props.registerUsers(userData, this.props.history);
  }

  render() {
    const { errors } = this.props.errors;
    return (
      <div>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-10 m-auto">
                <h1 className="display-4 text-center">Register</h1>

                <form noValidate onSubmit={this.onSubmit}>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          className={classnames(
                            "form-control form-control-lg",
                            {
                              "is-invalid": errors.first_name
                            }
                          )}
                          placeholder="First Name"
                          name="first_name"
                          value={this.state.first_name}
                          onChange={this.onChange}
                        />
                        {errors.first_name && (
                          <div className="invalid-feedback">
                            {errors.first_name}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          className={classnames(
                            "form-control form-control-lg",
                            {
                              "is-invalid": errors.middle_name
                            }
                          )}
                          placeholder="Middle Name"
                          name="middle_name"
                          value={this.state.middle_name}
                          onChange={this.onChange}
                        />
                        {errors.middle_name && (
                          <div className="invalid-feedback">
                            {errors.middle_name}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          className={classnames(
                            "form-control form-control-lg",
                            {
                              "is-invalid": errors.last_name
                            }
                          )}
                          placeholder="Last Name"
                          name="last_name"
                          value={this.state.last_name}
                          onChange={this.onChange}
                        />
                        {errors.last_name && (
                          <div className="invalid-feedback">
                            {errors.last_name}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className={classnames(
                            "form-control form-control-lg",
                            {
                              "is-invalid": errors.username
                            }
                          )}
                          placeholder="Username"
                          name="username"
                          value={this.state.username}
                          onChange={this.onChange}
                        />
                        {errors.username && (
                          <div className="invalid-feedback">
                            {errors.username}
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className={classnames(
                            "form-control form-control-lg",
                            {
                              "is-invalid": errors.primary_phone
                            }
                          )}
                          placeholder="Phone"
                          value={this.state.primary_phone}
                          name="primary_phone"
                          onChange={this.onChange}
                        />
                        {errors.primary_phone && (
                          <div className="invalid-feedback">
                            {errors.primary_phone}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className={classnames(
                            "form-control form-control-lg",
                            {
                              "is-invalid": errors.email
                            }
                          )}
                          placeholder="Email Address"
                          value={this.state.email}
                          name="email"
                          onChange={this.onChange}
                        />
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>

                      <div className="form-group">
                        <input
                          type="password"
                          className={classnames(
                            "form-control form-control-lg",
                            {
                              "is-invalid": errors.password
                            }
                          )}
                          placeholder="Password"
                          name="password"
                          value={this.state.password}
                          onChange={this.onChange}
                        />
                        {errors.password && (
                          <div className="invalid-feedback">
                            {errors.password}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8 m-auto">
                      <input
                        type="submit"
                        className=" btn btn-success btn-block mt-4"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
UserRegister.propTypes = {
  registerUsers: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  names: state.names,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUsers }
)(withRouter(UserRegister));

import React, { Component} from 'react';
import { Redirect } from 'react-router-dom';
import auth from '../services/auth';
import '../login.css';
import avatar from '../img_avatar2.png';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css';
class LoginPage extends React.Component {
  state = {
    redirectToReferrer: false,
    failed: false, 
    email: "",
    password: "",
  };


  fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      this.setState({ [name]: value });
    }
  }

  login = (e) => {
    e.preventDefault();
    let { email, password } = this.state;
    auth.authenticate(email, password)
      .then((user) => {
        this.setState({ redirectToReferrer: true });
      })
      .catch((err) => {
        this.setState({ failed: true });
      });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer, failed } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    let err = "";
    if (failed) {
      err = <div className="alert alert-danger" role="alert">Login Failed</div>;
    }

    return (
          <div className="card cardsize3">
              <div className="card-header header4">Log in</div>
                <div className="card-body">
                    <div className="imgcontainer">
                        <img src={avatar} alt="Avatar" className="avatar"/>
                    </div>
                        <form onSubmit={this.login}>
                            { err }
                                <div className="marg input-field">
                                    <input 
                                        className="validate"
                                        type="email"
                                        name="email"
                                        value={this.state.email} 
                                        onChange={this.fieldChanged('email')} />
                                        <label for="email" className="active">Email</label>
                                    
                                </div>
                                <div className="input-field">
                                <label for="password" className="e">Password</label>
                                    <input 
                                        className="validate"
                                        type="password"
                                        name="password"
                                        value={this.state.password} 
                                        onChange={this.fieldChanged('password')} />
                                    </div>
                                    <p>
                                      <label>
                                        <input id="indeterminate-checkbox" type="checkbox" />
                                        <span>Remember me</span>
                                      </label>
                                    </p>
                                    <button class="btn waves-effect waves-light submit" type="submit" name="action">Log in
  </button>
                          
                        </form>
                </div>
              </div>
    );
  }
}

export default LoginPage;
import React from 'react';
import { Redirect } from 'react-router-dom';
import auth from '../services/auth';
import '../login.css';
import avatar from '../img_avatar2.png';


class LoginPage extends React.Component {
  state = {
    redirectToReferrer: false,
    failed: false, 
    email: "",
    password: "",
  }

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
          <div className="card cardsize">
              <div className="card-header header">Log in</div>
                <div className="card-body">
                    <div className="imgcontainer">
                        <img src={avatar} alt="Avatar" className="avatar"/>
                    </div>
                        <form onSubmit={this.login}>
                            { err }
                                <div className="margin">
                                    <lable for='email' className="margin"><b>E-mail</b></lable>
                                    <input 
                                        className="email"
                                        type="email"
                                        name="email"
                                        placeholder="Email" 
                                        value={this.state.email} 
                                        onChange={this.fieldChanged('email')} />
                                </div>
                                <div className="margin">
                                    <lable for='password' className="margin"><b>Password</b></lable>
                                    <input 
                                        className="password"
                                        type="password"
                                        name="password"
                                        placeholder="Password" 
                                        value={this.state.password} 
                                        onChange={this.fieldChanged('password')} />
                                    </div>
                                
                            <div className="loginbtn">
                            <button 
                                type="submit"
                            >Log in</button>
                            </div>
                        </form>
                </div>
              </div>
    );
  }
}

export default LoginPage;
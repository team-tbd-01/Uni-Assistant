import React from 'react';
import { Redirect } from 'react-router-dom';
import auth from '../services/auth';
import "../Signup.css"


class Signup extends React.Component{
    state = {
        redirectToReferrer: false,
        failed: false, 
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        userName: "",
      }

    fieldChanged = (name) => {
        return (event) => {
          let { value } = event.target;
          this.setState({ [name]: value });
        }
      }
    login = (e) => {
        e.preventDefault();
        let err = "";
        let { email, password, userName, confirmPassword, firstName, lastName  } = this.state;
        if (confirmPassword === password){
        auth.signup(email,userName, password, firstName, lastName)
          .then((user) => {
            this.setState({ redirectToReferrer: true });
          })
          .catch((err) => {
            this.setState({ failed: true });
          });
        } else{
          err = <div className="alert alert-danger alert1" role="alert">"Your password and confirmation password do not match.</div>;
        }
      }
      render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { redirectToReferrer, failed } = this.state;
    
        if (redirectToReferrer) {
          return <Redirect to={from} />;
        }
    
        let err = "";
        if (failed) {
          err = <div className="alert alert-danger alert1" role="alert">Login Failed</div>;
        }
    
        return (
                        <div className="container">
                          <form onSubmit={this.login}>
                            <div>
                              <p className="signup1"><b>Sign up</b></p>
                              <p className="fillinform">Please fill in this form to create an account.</p>
                            </div>
                            <hr></hr>
                              { err }
                              <div className="row">
                                    <div className="col-50">
                                    <input
                                        placeholder = "Email"
                                        className="validate"
                                        type="email"
                                        name="email"
                                        value={this.state.email} 
                                        onChange={this.fieldChanged('email')} />
                                        <input 
                                            placeholder = "First Name"                                            className = "validate"
                                            type="text"
                                            name="firstname"
                                            value={this.state.firstName} 
                                            onChange={this.fieldChanged('firstName')} />
                                        <input 
                                            className = "validate"
                                            type="password"
                                            name="password"
                                            placeholder = "Password"
                                            value={this.state.password} 
                                            onChange={this.fieldChanged('password')} />
                                            
                                    </div>
                                        <div className="col-50">
                                        <input 
                                            type="text"
                                            name="username"
                                            placeholder="Username" 
                                            value={this.state.userName} 
                                            onChange={this.fieldChanged('userName')} />
                                        <input
                                            type="text"
                                            name="lastname"
                                            placeholder="Last Name" 
                                            value={this.state.lastName} 
                                            onChange={this.fieldChanged('lastName')} />
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Confirm Password" 
                                            value={this.state.confirmPassword} 
                                            onChange={this.fieldChanged('confirmPassword')} />
                                        </div>
                                </div>
                                <button class="btn waves-effect waves-light submit" type="submit" name="action">sign up
  </button>
                          </form>
                        </div>
      );
      }
}

export default Signup;
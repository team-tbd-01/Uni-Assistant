import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import auth from '../services/auth';
const classes = "btn btn-primary";

const AuthButton = withRouter(({ history }) => {
    let isAuthenticated = localStorage.getItem("isAuthenticated");

    if(isAuthenticated === "false") {
    return (<div>
      <Link className={classes} to="/login">Login</Link> <Link className={classes} to="/signup">Sign up</Link>
      </div>);
  }
  
  const logout = () => {
    auth.signout().then(() => history.push('/'));
  }
  return (
    <div>
      <button className={classes} onClick={logout}>Logout</button>
    </div>
  );
});

export default AuthButton;
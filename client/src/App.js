import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import CoursesPage from './pages/CoursesPage';
import AboutUsPage from './pages/AboutUsPage';

import './App.css';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">Uni-Assistant</Link>
      <ul className="navbar-nav mr-auto">
      <li className="nav-item">
          <NavLink className="nav-link" exact to="/courses">
            Courses
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}


class App extends React.Component {
  render() {
    return (
        <Router>
          <Navigation />
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/courses" component={CoursesPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/" />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;

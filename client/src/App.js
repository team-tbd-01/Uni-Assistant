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
import AddCoursePage from './pages/AddCoursePage';
import ACoursePage from './pages/ACoursePage'
import AQuestionPage from './pages/AQuestionPage'
import AskQuestionPage from './pages/AskQuestionPage'
/*import LandingPage from './pages/LandingPage';*/
import AuthButton from './components/AuthButton';
import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';
import './App.css';
import './css/login.css';

//This function is to allow the name of the college to change dynamically. Will need to create
//another function that will check what school the user is from and will put the schools name.
//For now just leave this is as, it's not really doing anything important besides maybe confusing you lol.
function ForumName(props){
  return <Link className="navbar-brand" to="/"> {props.name} Forum</Link>;
}

function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <ForumName name = "CUNY" />
      <ul className="navbar-nav mr-auto">
      <li className="nav-item">
          <NavLink className="nav-link" exact to="/courses">
            Courses
          </NavLink>
        </li>
      </ul>
      <AuthButton />
    </nav>
  );
}


class App extends React.Component {
  render() {
    return (
        <Router>
          <Navigation />
              <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/courses" component={CoursesPage} />
                <Route path="/new-course" component={AddCoursePage} />
                <Route path="/new-question" component={AskQuestionPage} />
                <Route path="/a-course" component={ACoursePage} />
                <Route path="/a-question" component={AQuestionPage} />
                <Route path="/Signup" component={Signup}/>
                <Route path="/" />
              </Switch> 
        </Router>
    );
  }
}


export default App;

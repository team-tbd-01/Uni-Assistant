import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import CoursesPage from './pages/CoursesPage';
import AddCoursePage from './pages/AddCoursePage';
import ACoursePage from './pages/ACoursePage'
import AQuestionPage from './pages/AQuestionPage'
import AskQuestionPage from './pages/AskQuestionPage'
import AuthButton from './components/AuthButton';
import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';
import landingpage from './pages/landingpage';
import './App.css';
import './css/login.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css';

//This function is to allow the name of the college to change dynamically. Will need to create
//another function that will check what school the user is from and will put the schools name.
//For now just leave this is as, it's not really doing anything important besides maybe confusing you lol.
function ForumName(props){
  return <Link className="navbar-brand" to="/"> {props.name} Forum</Link>;
}

function Navigation(props) {
  return (
    <nav >
      <a href="#!" class="brand-logo center">Uni-Assistant</a>
      <div class="nav-wrapper">
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><Link  exact to="/courses">Courses</Link></li>
      </ul>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <AuthButton/>
      </ul>
      </div>
    </nav>
  );
}


class App extends React.Component {
  constructor(){
    super();

    this.state ={
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  checkLoginStatus(){
    fetch("/api/auth/logged_in")
    .then((response) => {
      console.log(response)
      console.log(response.ok)
          const json = JSON.stringify(response)
          localStorage.setItem('user', json)
          localStorage.setItem('isAuthenticated', true)
    })
    .catch(error => {
      console.log(error)
      localStorage.setItem('isAuthenticated', false)
    });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogin(data) {
    this.setState({
      loggedInstatus: "LOGGED_IN",
    })
  }



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
                <Route path="/" component={landingpage} />
              </Switch> 
        </Router>
    );
  }
}


export default App;

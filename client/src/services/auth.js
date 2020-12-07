// This service object was adapted from here: 
//  https://tylermcginnis.com/react-router-protected-routes-authentication/
//
// This version was modified to use real authentication implemented
// in the backend api. It was also modified to return promises instead
// of using callbacks `cb`.

const auth = {
    isAuthenticated: false,
    initilize () {
      this.isAuthenticated = localStorage.getItem("isAuthenticated")
    },
    deinicilize() {
      this.isAuthenticated = localStorage.getItem("isAuthenticated")
    },
    authenticate(email, password) {
      return fetch('/api/auth/login', { 
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
          if(!response.ok) {
            throw new Error('Login Failed');
          }
  
          return response.json();
        })
        .then((body) => {
          this.isAuthenticated = true;
          const json = JSON.stringify(body)
          localStorage.setItem('user', json)
          localStorage.setItem('isAuthenticated', true)
          return body;
        });
    },
    signout(cb) {
      return fetch('/api/auth/logout', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
          if(!response.ok) {
            throw new Error('Logout Failed');
          }
  
          return response.json();
        })
        .then((body) => {
          this.isAuthenticated = false;
          localStorage.setItem('isAuthenticated', false)
          return body;
        });
    },
    signup(email,username,password,first_name,last_name) {
      return fetch('/api/auth/signup', { 
        method: 'POST',
        body: JSON.stringify({ email, username, password, first_name, last_name }),
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
          if(!response.ok) {
            console.log(response)
            throw new Error('Sign up Failed');
          }
  
          return response.json();
        })
        .then((body) => {
          console.log(body)
          const json = JSON.stringify(body)
          localStorage.setItem('user', json)
          localStorage.setItem('isAuthenticated', true)
          this.isAuthenticated = true;
          return body;
        });
    }
  }
  
  export default auth;
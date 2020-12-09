import React from 'react';
import {Link} from 'react-router-dom';

/*class AddCoursePage extends React.Component{

    state = {
        error: false,
        success: false,
        name: '',
        code: '',
    }

    nameChanged = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    codeChanged = (event) => {
        this.setState({
            code: event.target.value
        });
    }

    savePost = (event) => {
        event.preventDefault();
        fetch("/api/course/", {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: this.state.name,
                                        code: this.state.code,
            }),
        })
            .then(res => {
                if(res.ok) {
                    return res.json()
                }

                throw new Error('Content validation');
            })
            .then(post => {
                this.setState({
                    success: true,
                });
            })
            .catch(err => {
                this.setState({
                    error: true,
                });
            });
    }

    render(){
        return (
            <form>
                <div className="form-group">
                    <label className="h3">Course Name:</label>
                    <input className="form-control"
                           type="text"
                           name="name"
                           id="name"
                           placeholder="Example: CISC, CIS, etc."
                           value={this.state.name}
                           onChange={this.nameChanged}/>
                </div>
                <div className="form-group">
                    <label className="h3">Course Code:</label>
                    <input className="form-control" 
                           type="text" 
                           name="code"
                           placeholder="Example: 101, 3220, etc." 
                           value={this.state.code}
                           onChange={this.codeChanged}/>
                </div>
                <button className="btn btn-primary" onClick={this.savePost}>Save Post</button>
                {/*<Link to="/courses" className="btn btn-primary" onClick={handleClick}>Submit</Link>}
            </form>
        );
    }
*/
class AddCoursePage extends React.Component {

  state = {
    course_name: '',
    course_code: '',
    department: '',
    school: '',
    departmentData: [],
    schoolData: []
  }

  constructor(props) {
    super(props);
    this.setCourseName = this.setCourseName.bind(this);
    this.setCourseCode = this.setCourseCode.bind(this);
    this.setDepartment = this.setDepartment.bind(this);
    this.setSchool = this.setSchool.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  fetchDepartments() {
    fetch('http://localhost:8000/api/departments')
    .then(res => res.json())
    .then(results => {
      console.log(results);
      this.setState({
        departmentData: results
      })
    })
  }

  fetchSchools() {
    fetch('http://localhost:8000/api/schools')
    .then(res => res.json())
    .then(results => {
      console.log(results);
      this.setState({
        schoolData: results
      })
    })
  }

  addCourse() {


    let requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        coursename: this.state.course_name,
        coursecode: this.state.course_code,
        departmentid: this.state.department,
        schoolid: this.state.school
      })
      
    }

    fetch('http://localhost:8000/api/courses', requestOptions)
    .then(res => res.json())
    .then(() => {
      alert("Successful")
    })
    .catch(err => {
      alert(err);
    })
    .catch(err => {
      alert(err);
    })
  }

  componentDidMount() {
    this.fetchDepartments();
    this.fetchSchools();  
  }

  setCourseName(event) {
    this.setState({
      course_name: event.target.value
    })
  }

  setCourseCode(event) {
    this.setState({
      course_code: event.target.value
    })
  }

  setDepartment(event) {
    this.setState({
      department: event.target.value
    })
  }

  setSchool(event) {
    this.setState({
      school: event.target.value
    })
  }

  handleClick() {
    this.addCourse()
  }

  render() {
    return (
      <div className="container-fluid text-center">
        <div className="row justify-content-center">
          <form>
            <div className="form-group">
                <label className="h3">Course Name:</label>
                <input className="form-control" onChange={this.setCourseName} value={this.state.course_name} type="text"/>
                <small className="form-text text-muted">Example: Algorithm, Operating System, etc.</small>
            </div>
            <div className="form-group">
                <label className="h3">Course Code:</label>
                <input className="form-control" onChange={this.setCourseCode} value={this.state.course_code} type="text"/>
                <small className="form-text text-muted">Example: 101, 3220, etc.</small>
            </div>
            <div className="form-group">
                <label className="h3">Department:</label>
                <select onChange={this.setDepartment} className="form-control" id="exampleFormControlSelect1">
                <option value="" selected disabled>Choose One</option>
                  {
                    this.state.departmentData.map(department => (
                      <option value={department.id}>{department.departmentname}</option>
                    ))
                  }
                </select>
            </div>
            <div className="form-group">
                <label className="h3">School:</label>
                <select onChange={this.setSchool} className="form-control" id="exampleFormControlSelect1">
                  <option value="" selected disabled>Choose One</option>
                  {
                    this.state.schoolData.map(school => (
                      <option value={school.id}>{school.schoolname}</option>
                    ))
                  }
                </select>
            </div>
            <a href="#" className="btn btn-primary" onClick={this.handleClick}>Submit</a>
          </form>
        </div>
        
      </div>
    );
  }
}

export default AddCoursePage;
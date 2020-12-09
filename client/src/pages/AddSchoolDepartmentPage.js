import React from 'react';

class AddSchoolDepartment extends React.Component {

    state = {
        departmentName: '',
        schoolName: ''
    }

    constructor(props) {
        super(props)

        this.setDepartment = this.setDepartment.bind(this);
        this.setSchool = this.setSchool.bind(this);
        this.sendDepartmentData = this.sendDepartmentData.bind(this);
        this.sendSchoolData = this.sendSchoolData.bind(this);
    }

    setDepartment(event) {
        this.setState({
            departmentName: event.target.value
        })
    }

    setSchool(event) {
        this.setState({
            schoolName: event.target.value
        })
    }

    sendDepartmentData() {
        let requestOptions = {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              departmentname: this.state.departmentName,
              abbreviation: 'csc'
            })
        }

        fetch('http://localhost:8000/api/departments', requestOptions)
        .then(res => res.json())
        .then(() => {
            alert("Success");
        })
        .catch(err => {
            alert(err)
        })
    }

    sendSchoolData() {
        let requestOptions = {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              schoolname: this.state.schoolName,
            })
        }

        fetch('http://localhost:8000/api/schools', requestOptions)
        .then(res => res.json())
        .then(() => {
            alert("Success");
        })
        .catch(err => {
            alert(err)
        })
    }

    render() {
        return (
        <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <form>
                <div className="form-group mt-5">
                    <label className="h3">Department Name</label>
                    <input onChange={this.setDepartment} className="form-control" type="text"/>
                    <small className="form-text text-muted">Example: Computer Science, English, Mathematics</small>
                </div>

                <a href="#" className="btn btn-primary" onClick={this.sendDepartmentData}>Add Department</a>

                <div className="form-group mt-5">
                    <label className="h3">School Name</label>
                    <input onChange={this.setSchool} className="form-control" type="text"/>
                    <small className="form-text text-muted">Example: Baruch College, Queens College</small>
                </div>

                <a href="#" className="btn btn-primary" onClick={this.sendSchoolData}>Add School</a>
              </form>
              
            </div>
        </div>
        )
    }
}

export default AddSchoolDepartment;
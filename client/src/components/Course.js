import React from 'react';
import {Link} from 'react-router-dom';

class Course extends React.Component {
    
    state = {
        schoolName: '',
        departmentName: '',
        description: ''
    }

    constructor(props) {
        super(props);
    }

    fetchSchoolByID(id) {
        fetch(`http://localhost:8000/api/schools/${id}`)
        .then(res => res.json())
        .then(results => {
            this.setState({
                schoolName: results.schoolname
            })
        })
    }

    fetchDepartmentByID(id) {
        fetch(`http://localhost:8000/api/departments/${id}`)
        .then(res => res.json())
        .then(results => {
            this.setState({
                departmentName: results.departmentname
            })
        })
    }

    fetchDescriptionByCourseID(id) {
        fetch(`http://localhost:8000/api/descriptions/course/${id}`)
        .then(res => res.json())
        .then(results => {
            this.setState({
                description: results[0].content
            })
        })
    }

    componentDidMount() {
        this.fetchSchoolByID(this.props.schoolid);
        this.fetchDepartmentByID(this.props.departmentid);
        this.fetchDescriptionByCourseID(this.props.id);
    }

    render() {
        return(
            <div className="courseCard col-10 col-md-8 col-lg-7 mx-auto">
                <div className="card mb-4 shadow">
                    <div className="card-body card-text">
                        <h5 className="">{this.props.courseName}</h5>
                        <h6>{this.props.courseCode}</h6>
                        <h6>{this.state.schoolName}</h6>
                        <h6>{this.state.departmentName}</h6>
                    </div>
                    <div className="card-footer small text-muted">
                        <p>{this.state.description}</p>
                        <Link to={`/a-course?id=${this.props.id}`} className="btn btn-primary mx-auto">View Course</Link>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Course;
import React from 'react';
import {Link} from 'react-router-dom';
import Course from '../components/Course';

class CoursesPage extends React.Component {

    constructor(props) {
        super(props);

        this.fetchCourses = this.fetchCourses.bind(this);
    }

    state = {
        courseData: []
    }

    fetchCourses() {
        fetch('http://localhost:8000/api/courses')
        .then(res => res.json())
        .then(results => {
            this.setState({
                courseData: results
            })

            console.log(results);
        })
        .catch(err => {
            console.log(err);
        })
    }

    componentDidMount() {
        this.fetchCourses();
    }

    render() {
        return(
            <div className="container-fluid text-center">
                <div className="row justify-content-center">
                    <div>
                        <h1 className="text-primary">Courses</h1>
                        <div className="courseBtn">
                            <Link to="/new-course" className="btn btn-primary">Add Course</Link>
                        </div>

                        {
                            this.state.courseData.map(course => (
                                <Course 
                                key={course.id}
                                id={course.id}
                                courseName={course.name}
                                schoolid={course.schoolId}
                                departmentid={course.departmentId}
                                courseCode={course.course_code}
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis egestas ipsum facilisis convallis. Curabitur placerat ex at metus ultricies, nec dictum leo pharetra. Ut auctor velit in laoreet ultrices."
                                />
                            ))
                        }

                        
                    </div>
                </div>
            </div>
        );
    }
    
}

export default CoursesPage;
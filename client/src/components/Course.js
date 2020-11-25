import React from 'react';
import {Link} from 'react-router-dom';

function Course(props) {
    // card w-75 mx-auto - outer div bootstrap
    // card-header - next div bootstrap
    return(
        <div className="courseCard col-10 col-md-8 col-lg-7 mx-auto">
            <div className="card mb-4 shadow">
                <div className="card-body card-text">
                    <h5 className="">{props.courseName}</h5>
                </div>
                <div className="card-footer small text-muted">
                    <p>{props.description}</p>
                    <Link to={{
                        pathname: "/a-course",
                        state: {
                            courseName: props.courseName
                        }
                    }} className="btn btn-primary mx-auto">View Course</Link>
                </div>
            </div>
        </div>
    );
}

export default Course;
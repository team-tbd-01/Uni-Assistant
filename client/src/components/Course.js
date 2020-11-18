import React from 'react';

function Course(props) {
    return(
        <div className="card w-75 mx-auto">
            <div className="card-header" >
                {props.courseName}
            </div>
            <div className="card-body">
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">View Course</a>
            </div>
        </div>
    );
}

export default Course;
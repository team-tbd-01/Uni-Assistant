import React from 'react';

function Course(props) {
    // card w-75 mx-auto - outer div bootstrap
    // card-header - next div bootstrap
    return(
        <div className="col-10 col-md-8 col-lg-7 mx-auto">
            <div className="card mb-4 shadow">
                <div className="card-body card-text">
                    {/* <Link to={"/posts/"+id}>{ content }</Link> */}
                    {props.courseName}
                </div>
                <div className="card-footer small text-muted">
                    {/* { createdAt } */}
                    <p>{props.description}</p>
                    <a href="#" className="btn btn-primary mx-auto">View Course</a>
                </div>
            </div>
        </div>
    );
}

export default Course;
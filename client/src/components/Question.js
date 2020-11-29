import React from 'react';
import {Link} from 'react-router-dom';

function Question(props) {
    return(
        <div className="courseQuestion col-10 col-md-8 col-lg-7 mx-auto">
            <div className="card mb-4 shadow">
                <div className="card-body card-text">
                    <h5>{props.question}</h5>
                </div>
                <div className="card-footer small text-muted">
                    <Link to={{
                        pathname: "/a-question",
                        state: {
                            question: props.question
                        }
                    }} className="btn btn-primary mx-auto">View Question</Link>
                </div>
            </div>
        </div>
    );
}

export default Question;
import React from 'react';
import {Link} from 'react-router-dom';

function Comment(props) {
    return(
        <div className="courseQuestion col-10 col-md-8 col-lg-7 mx-auto">
            <div className="card mb-4 shadow">
                <div className="card-body card-text">
                    <h5>{props.comment}</h5>
                </div>
            </div>
        </div>
    );
}

export default Comment;
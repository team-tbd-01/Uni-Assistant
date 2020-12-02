import React from 'react';
import {Link} from 'react-router-dom';

function handleClick() {

}

function AboutUsPage(props) {
  return (
    <form id="question">
        <div className="form-group">
            <label className="h3">Title:</label>
            <input className="form-control" type="text" />
        </div>
        <div className="form-group">
            <label className="h3">Question:</label>
            <textarea className="form-control questionBox" form="question"></textarea>
        </div>
        <Link to="/a-course" className="btn btn-primary" onClick={handleClick}>Submit</Link>
  </form>
  );
}

export default AboutUsPage;
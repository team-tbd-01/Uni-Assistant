import React from 'react';
import {Link} from 'react-router-dom';

function handleClick() {

}

function AboutUsPage(props) {
  return (
    <form>
        <div className="form-group">
            <label className="h3">Course Name:</label>
            <input className="form-control" type="text" name="name" />
            <small className="form-text text-muted">Example: CISC, CIS, etc.</small>
        </div>
        <div className="form-group">
            <label className="h3">Course Code:</label>
            <input className="form-control" type="text" name="name" />
            <small className="form-text text-muted">Example: 101, 3220, etc.</small>
        </div>
        <Link to="/courses" className="btn btn-primary" onClick={handleClick}>Submit</Link>
  </form>
  );
}

export default AboutUsPage;
import React from 'react';

function handleClick() {

}

function AboutUsPage(props) {
  return (
    <form>
        <div className="form-group">
            <label>
                Course Name:
            </label>
            <input className="form-control" type="text" name="name" />
            <small className="form-text text-muted">Example: CISC, CIS, etc.</small>
        </div>
        <div className="form-group">
            <label>
                Course Code:
            </label>
            <input className="form-control" type="text" name="name" />
            <small className="form-text text-muted">Example: 101, 3220, etc.</small>
        </div>
        <input className="btn btn-primary" type="submit" value="Submit" onClick={handleClick}/>
  </form>
  );
}

export default AboutUsPage;
import React from 'react';
import {Link} from 'react-router-dom';

function handleClick() {

}

function AboutUsPage(props) {
  return (
    <div className="text-center">
      <form id="question">
          <div className="form-group mx-auto w-50">
              <label className="h3">Title:</label>
              <input className="form-control mx-auto" type="text" />
          </div>
          <div className="form-group mx-auto w-50">
              <label className="h3">Question:</label>
              <textarea className="form-control questionBox" form="question" maxLength="1000"></textarea>
          </div>
          <Link to="/a-course" className="btn btn-primary" onClick={handleClick}>Submit</Link>
    </form>
  </div>
  );
}

export default AboutUsPage;
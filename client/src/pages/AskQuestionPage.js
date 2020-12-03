import React from 'react';
import {Link} from 'react-router-dom';

function handleClick() {
    alert("thanks you")
}

class AboutUsPage extends React.Component {

    state = {
        postContent: ''
    }

    constructor(props) {
        super(props)
        this.setPostContent = this.setPostContent.bind(this);
    }

    setPostContent(event) {
        this.setState({
            postContent: event.target.value
        })
    }

    render() {
        return (
            <form id="question">
                <p>Hello</p>
                <div className="form-group">
                    <label className="h3">Question:</label>
                    <textarea onChange={this.setPostContent} className="form-control questionBox" form="question"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleClick}>Submit</button>
          </form>
          );
    }
  
}

export default AboutUsPage;
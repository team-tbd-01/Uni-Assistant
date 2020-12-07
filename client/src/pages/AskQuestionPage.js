import React from 'react';
import {Link} from 'react-router-dom';

function handleClick() {

}

class AboutUsPage extends React.Component {

    state = {
        postContent: ''
    }

    constructor(props) {
        super(props)
        this.setPostContent = this.setPostContent.bind(this);
        this.sendPostData = this.sendPostData.bind(this);
    }

    sendPostData() {
        let requestOptions = {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                content: "Test",
                courseId: 1
            })
        }

        fetch('http://localhost:8000/api/posts', requestOptions)
        .then(res => res.json())
        .then(() => {
            alert("Success");
        })
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
                <button className="btn btn-primary" onClick={this.sendPostData}>Submit</button>
          </form>
          );
    }


export default AboutUsPage;
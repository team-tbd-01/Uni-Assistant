import React from 'react';
import {Link} from 'react-router-dom';
import Question from '../components/Question'
import queryString from 'query-string';
import AboutUsPage from '../pages/AboutUsPage'
import '../css/courses.css';

class ACoursePage extends React.Component {

    state = {
        courseData: {},
        postData: [],
        postContent: ''
    }

    constructor(props) {
        super(props);

        this.setPostContent = this.setPostContent.bind(this);
        this.sendPostContent = this.sendPostContent.bind(this);
    }

    fetchCourseData(id) {
        fetch(`http://localhost:8000/api/courses/${id}`)
        .then(res => res.json())
        .then(results => {
            console.log(results);
            this.setState({
                courseData: results
            })
        })
    }

    fetchPostData(id) {
        fetch(`http://localhost:8000/api/posts/course/${id}`)
        .then(res => res.json())
        .then(results => {
            console.log(results);
            this.setState({
                postData: results 
            })
        })
    }

    sendPostContent() {
        let id = queryString.parse(this.props.location.search).id;

        let requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              content: "Hi",
              courseId: 1
            })
        }

        fetch(`http://localhost:8000/api/posts`, requestOptions)
        .then(res => res.json())
        .then(() => {
            alert("Successful");
        })
    }

    setPostContent(event) {
        this.setState({
            postContent: event.target.value
        })
    }

    componentDidMount() {
        this.fetchCourseData(queryString.parse(this.props.location.search).id)
        this.fetchPostData(queryString.parse(this.props.location.search).id)
    }

    render() {
        return(
            <div className="text-center">
                <div>
                    <h3 className="courseHeader jumbotron">{this.state.courseData.name}</h3>
                </div>
                <h1 className="text-primary position-relative text-center">Questions</h1>
                
                <Link to="/new-question" className="btn-primary btn new-question mb-3">New Question</Link>

                {
                    this.state.postData.map(post => (
                        <Question id={post.id} question={post.content}/>
                    ))
                }
            </div>
        )
    }
}

export default ACoursePage;
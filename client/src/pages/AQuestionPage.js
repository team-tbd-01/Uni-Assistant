import React from 'react';
import {Link} from 'react-router-dom';
import Comment from '../components/Comment'
import queryString from 'query-string';
import Question from '../components/Question';
import '../css/comments.css';

class AQuestionPage extends React.Component {

    state = {
        commentData: [],
        postTitle: '',
        commentContent: ''
    }

    constructor(props) {
        super(props);
        
        this.setCommentContent = this.setCommentContent.bind(this)
        this.sendCommentData = this.sendCommentData.bind(this);
    }
    
    fetchComments(id) {
        fetch(`http://localhost:8000/api/comments/post/${id}`)
        .then(res => res.json())
        .then(results => {
            this.setState({
                commentData: results
            })
        })
    }

    fetchPost(id) {
        fetch(`http://localhost:8000/api/posts/${id}`)
        .then(res => res.json())
        .then(results => {
            this.setState({
                postTitle: results.content
            })
        })
    }

    setCommentContent(event) {
        this.setState({
            commentContent: event.target.value
        })
    }

    sendCommentData() {
        let id = queryString.parse(this.props.location.search).id;

        let requestOptions = {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              content: this.state.commentContent,
              postid: id
            })
        }

        fetch(`http://localhost:8000/api/comments`, requestOptions)
        .then(res => res.json())
        .then(() => {
            alert("Successful");
        })
    }

    componentDidMount () {
        this.fetchComments(queryString.parse(this.props.location.search).id)
        this.fetchPost(queryString.parse(this.props.location.search).id)
    }
    render() {
        return(
            <div className="text-center">
                <div>
                    <h3 className="courseHeader jumbotron">{this.state.postTitle}</h3>
                </div>
                <div >
                    {
                        this.state.commentData.map(comment => (
                            <Comment userid={comment.userId} comment={comment.content}/>
                        ))
                    }

                    
                </div>
                    {/* <label className="h5">Comment:</label> */}
                <textarea onChange={this.setCommentContent} id="textarea1" className="materialize-textarea" form="question" maxLength="500"></textarea>
                <button onClick={this.sendCommentData} id="submit1" className="btn btn-primary">Submit</button>
            </div>
                
        )
    }
}

export default AQuestionPage;
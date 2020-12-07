import React from 'react';
import {Link} from 'react-router-dom';
import Comment from '../components/Comment'
import queryString from 'query-string';
import Question from '../components/Question';

class AQuestionPage extends React.Component {

    state = {
        commentData: [],
        postTitle: ''
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
                            <Comment comment={comment.content}/>
                        ))
                    }

                    
                </div>

                <div className="form-group">
                    {/* <label className="h5">Comment:</label> */}
                    <textarea className="form-control mx-auto w-50" form="question" maxLength="500"></textarea>
                </div>
                <Link className="btn btn-primary">Submit</Link>
            </div>
                
        )
    }
}

export default AQuestionPage;
import React from 'react';
import {Link} from 'react-router-dom';
import Comment from '../components/Comment'

class AQuestionPage extends React.Component {
    state = {
        question: this.props.location.state.question
    }
    componentDidMount () {

    }
    render() {
        return(
            <div>
                <div>
                    <h3 className="courseHeader jumbotron">{this.state.question}</h3>
                </div>
                <div>
                    <Comment comment="The answer is 1"/>
                    <Comment comment="The answer is cool chickens"/>
                    <Comment comment="The answer is james bond"/>
                </div>
                <div className="form-group">
                    {/* <label className="h5">Comment:</label> */}
                    <textarea className="" form="question"></textarea>
                </div>
                <Link className="btn btn-primary">Submit</Link>
            </div>
        )
    }
}

export default AQuestionPage;
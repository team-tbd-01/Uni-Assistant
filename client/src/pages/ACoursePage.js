import React from 'react';
import {Link} from 'react-router-dom';
import Question from '../components/Question'

class ACoursePage extends React.Component {
    state = {
        courseName: this.props.location.state.courseName
    }
    componentDidMount () {
        // fetch(`https://api.twitter.com/user/${handle}`)
        // .then((user) => {
        //     this.setState(() => ({ user }))
        // })
    }
    render() {
        return(
            <div>
                <div>
                    <h3 className="courseHeader jumbotron">{this.state.courseName}</h3>
                </div>
                <h1 className="text-primary position-relative">Questions</h1>
                <div className="questionBtn">
                    <Link to="/new-question" className="btn btn-primary">Ask Question</Link>
                </div>
                <Question question="Who is the coolest person in the world?" />
                <Question question="?" />
                <Question question="" />
            </div>
        )
    }
}

export default ACoursePage;
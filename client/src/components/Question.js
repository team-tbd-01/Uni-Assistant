import React from 'react';
import {Link} from 'react-router-dom';
import '../css/question.css';

class Question extends React.Component {

    state = {
        username: ''
    }

    constructor(props) {
        super(props)

        this.fetchUserData = this.fetchUserData.bind(this); 
    }

    fetchUserData() {
        let id = this.props.userid;

        fetch(`http://localhost:8000/api/users/${id}`)
        .then(res => res.json())
        .then(results => {
            console.log(results)
            this.setState({
                username: results.username
            })
        })
    }

    componentDidMount() {
        this.fetchUserData()
    }

    render() {
        return(
            <div className="courseQuestion col-10 col-md-8 col-lg-7 mx-auto">
                <div className="card mb-4 shadow">
                    <div className="card-body card-text">
                        <h5>{this.props.question}</h5>
                    </div>
                    <div className="card-footer small text-muted">
                        <Link to={`/a-question?id=${this.props.id}`} className="btn btn-primary mx-auto">View Question</Link>
                        <div className="float-end">
                            <p>{this.state.username}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Question;
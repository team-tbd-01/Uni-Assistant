import React from 'react';
import {Link} from 'react-router-dom';

class Comment extends React.Component {

    state = {
        username: '',
        first_name: '',
        last_name: ''
    }

    constructor(props) {
        super(props)

        this.fetchUserData = this.fetchUserData.bind(this)
    }

    fetchUserData() {
        let id = this.props.userid

        fetch(`http://localhost:8000/api/users/${id}`)
        .then(res => res.json())
        .then(results => {
            this.setState({
                username: results.username,
                first_name: results.first_name,
                last_name: results.last_name
            })
        })
    }

    componentDidMount() {
        this.fetchUserData();
    }

    render() {
        return(
            <div className="text-left courseQuestion col-10 col-md-8 col-lg-7 mx-auto">
                <div className="card mb-4 shadow">
                    <div className="card-body card-text">
                        <p>{this.props.comment}</p>
                    </div>
                    <div className="text-left card-footer small text-muted">
                        <span className="font-weight-bold">{this.state.first_name} {this.state.last_name} -- {this.state.username}</span>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Comment;
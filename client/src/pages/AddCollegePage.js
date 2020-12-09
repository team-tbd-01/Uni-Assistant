import React from 'react';
import { Redirect } from 'react-router-dom';

class AddCollegePage extends React.Component {
    state = {
        error: false,
        success: false,
        collegeName: '',
    }

    collegeChanged = (event) => {
        this.setState({
            collegeName: event.target.value
        });
    }

    saveCollege = (event) => {
        fetch("http://localhost:8000/api/schools", {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({schoolname: this.state.collegeName}),
        })
            .then(res => {
                if(res.ok) {
                    return res.json()
                }

                throw new Error('Content validation');
            })
            .then(post => {
                this.setState({
                    success: true,
                });
            })
            .catch(err => {
                this.setState({
                    error: true,
                });
            });
    }

    render() {
        if(this.state.success) return <Redirect to="/" />;

        let errorMessage = null;
        if(this.state.error) {
            errorMessage = (
                <div className="alert alert-danger">
                    "There was an error saving this college."
                </div>
            );
        }

        return (
            <div className="col-10 col-md-8 col-lg-7">
                { errorMessage }
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Example: College of Staten Island, etc."
                        value={this.state.collegeName}
                        className="form-control mr-3 rounded"
                        onChange={this.collegeChanged}
                    />
                    <button className="btn btn-primary" onClick={this.saveCollege}>Add College</button>
                </div>
            </div>
        );
    }
}

export default AddCollegePage;
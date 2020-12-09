import React from 'react';
import { Redirect } from 'react-router-dom';

class AddDepartmentPage extends React.Component {
    state = {
        error: false,
        success: false,
        departmentName: '',
        abb: '',
    }

    departmentChanged = (event) => {
        this.setState({
            departmentName: event.target.value
        });
    }

    abbreviationChanged = (event) => {
        this.setState({
            abb: event.target.value
        });
    }

    saveDepartment = (event) => {
        fetch("http://localhost:8000/api/departments", {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({departmentname: this.state.departmentName,
                abbreviation: this.state.abb}),
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
                    "There was an error saving this department."
                </div>
            );
        }

        return (
            <div className="container-fluid text-center">
                <div className="row justify-content-center">
            <div className="col-10 col-md-8 col-lg-7">
                { errorMessage }
                <label className="h3">Department Name:</label>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Example: Computer Science, etc."
                        value={this.state.departmentName}
                        className="form-control mr-3 rounded"
                        onChange={this.departmentChanged}
                    />
                    <label className="h3">Department Abbreviation:</label>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Example: CSC, BIO, ENG, MTH, etc."
                            value={this.state.abb}
                            className="form-control mr-3 rounded"
                            onChange={this.abbreviationChanged}
                        />
                    </div>
                    <button className="btn btn-primary" onClick={this.saveDepartment}>Add Department</button>
                </div>
            </div>
                </div>
            </div>
        );
    }
}

export default AddDepartmentPage;
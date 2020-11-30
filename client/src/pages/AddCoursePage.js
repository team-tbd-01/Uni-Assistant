import React from 'react';
import {Link} from 'react-router-dom';

function handleClick() {

}
class AddCoursePage extends React.Component{

    state = {
        error: false,
        success: false,
        name: '',
        code: '',
    }

    nameChanged = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    codeChanged = (event) => {
        this.setState({
            code: event.target.value
        });
    }

    savePost = (event) => {
        event.preventDefault();
        fetch("/api/course/", {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: this.state.name,
                                        code: this.state.code,
            }),
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

    render(){
        return (
            <form>
                <div className="form-group">
                    <label className="h3">Course Name:</label>
                    <input className="form-control"
                           type="text"
                           name="name"
                           id="name"
                           placeholder="Example: CISC, CIS, etc."
                           value={this.state.name}
                           onChange={this.nameChanged}/>
                </div>
                <div className="form-group">
                    <label className="h3">Course Code:</label>
                    <input className="form-control" 
                           type="text" 
                           name="code"
                           placeholder="Example: 101, 3220, etc." 
                           value={this.state.code}
                           onChange={this.codeChanged}/>
                </div>
                <button className="btn btn-primary" onClick={this.savePost}>Save Post</button>
                {/*<Link to="/courses" className="btn btn-primary" onClick={handleClick}>Submit</Link>*/}
            </form>
        );
    }
}

export default AddCoursePage;
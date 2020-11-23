import React from 'react';

class ACoursePage extends React.Component {
    state = {
        courseName: this.props.location.state.courseName
    }
    componentDidMount () {
        const { handle } = this.props.match.params
        
        // fetch(`https://api.twitter.com/user/${handle}`)
        // .then((user) => {
        //     this.setState(() => ({ user }))
        // })
    }
    render() {
        return(
            <div>
                <h3 >{this.state.courseName}</h3>
            </div>
        )
    }
}

export default ACoursePage;
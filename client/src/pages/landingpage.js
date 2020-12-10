import React from 'react';
import avatar from '../brainstroming(copy).jpg';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import '../landingpage.css'
class landingpage extends React.Component{


render() {
    return(
        <div className="row">
      <div className="col">
          <div className="leftside">
          <img  src={avatar} alt="Avatar" />
          </div>
      </div>
      <div className="col"><div className="rightside"></div><div className="card-panel blue-text text-darken-2 cent"><b className="font">Uni-Assistant</b> is a place where students within the CUNY system can interact with their peers. It's difficult at times for shy or nervous
people to really jump in and start communicating with others. 

It's also a place where students can ask questions regarding specific courses. When you get into higher level courses in the CUNY system, there is
a lack of capable tutoring. Uni-Assistant can help.</div>
</div>
</div>
    )
}
}
export default landingpage;
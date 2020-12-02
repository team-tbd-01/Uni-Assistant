import React from 'react';
import {Link} from 'react-router-dom';
import Course from '../components/Course';

function CoursesPage(props) {
    return(
        <div>
            <h1 className="text-primary">Courses</h1>
            <div className="courseBtn">
                <Link to="/new-course" className="btn btn-primary">Add Course</Link>
            </div>
            <Course courseName="CISC 101" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis egestas ipsum facilisis convallis. Curabitur placerat ex at metus ultricies, nec dictum leo pharetra. Ut auctor velit in laoreet ultrices."/>
            <Course courseName="CISC 102" description="Suspendisse potenti. Maecenas volutpat dui dignissim libero dignissim, at feugiat risus consectetur. Aenean vel ligula a mauris lacinia euismod. Nunc faucibus augue eget lorem interdum egestas. Sed at semper nunc. Proin rhoncus turpis faucibus augue finibus vulputate. Sed luctus consequat augue, ut posuere ligula blandit molestie."/>
            <Course courseName="CISC 103" description="Pellentesque semper nulla a mi commodo, ut blandit risus tempor. Suspendisse consectetur lorem urna, id dapibus urna accumsan vel. Quisque nisi nisl, sagittis tincidunt orci quis, facilisis gravida sapien. Sed at elit purus. Mauris in orci consequat, accumsan lectus pulvinar, porta erat. Fusce pellentesque nisi at tortor egestas, vel elementum est rutrum. Donec gravida dolor lectus, congue rutrum nunc scelerisque blandit. Vestibulum ornare turpis mollis justo tristique, nec porta enim hendrerit. Nulla iaculis ante sit amet nibh elementum, a consequat sem ornare. Duis eleifend varius ultrices. Pellentesque lectus massa, dignissim et lectus iaculis, aliquam viverra turpis. Integer lectus nisi, lacinia id scelerisque id, convallis id metus."/>
        </div>
    );
}

export default CoursesPage;
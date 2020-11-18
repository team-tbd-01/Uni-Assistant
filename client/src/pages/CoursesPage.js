import React from 'react';
import Course from '../components/Course';

function CoursesPage(props) {
    return(
        <div>
            <h1 className="text-primary position-relative">Courses</h1>
            <Course courseName="CISC 101" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor fringilla orci. Proin ullamcorper magna et augue pharetra bibendum. Sed felis eros, bibendum et orci nec, imperdiet sodales neque."/>
            <Course courseName="CISC 102" description="Fusce ac varius nisi, sed efficitur turpis. Vivamus ex massa, tincidunt ut interdum quis, molestie vitae enim. Cras in elit finibus nisi efficitur mollis. Etiam pellentesque est ut mauris condimentum pellentesque. Donec non erat ac augue pellentesque molestie. Ut posuere nunc in justo lacinia egestas."/>
            <Course courseName="CISC 103" description="Nullam a gravida massa. Nullam commodo urna orci, quis aliquet lorem maximus id. Morbi lobortis odio sapien, in molestie dolor molestie vel. In elit purus, porta sit amet magna ac, interdum malesuada lorem. Aliquam eu augue eu est pellentesque dapibus. Ut viverra euismod egestas."/>
        </div>
    );
}

export default CoursesPage;
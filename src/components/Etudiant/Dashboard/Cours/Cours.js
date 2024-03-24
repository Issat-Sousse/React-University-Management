import React from 'react'
import '../../../../Styles/cours.css';

function Cours(course) {
  return (
    <div className="course" id={course.id}>
      <h2 className="course-title">{course.title}</h2>
      <p className="course-description">{course.description}</p>
    </div>
  )
}

export default Cours
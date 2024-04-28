import React from 'react';
import '../../../../Styles/cours.css';

function Cours({ id, title, description }) {
  return (
    <div className="course" id={id}>
      <h2 className="course-title">{title}</h2>
      <p className="course-description">{description}</p>
    </div>
  );
}

export default Cours;

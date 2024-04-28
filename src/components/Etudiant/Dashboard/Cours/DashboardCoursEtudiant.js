import React from 'react';
import {Link } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Cours from './Cours';
import Topbar from '../../../Global/Topbar';

const cours = [
  { id: 1, title: "Math", description: "Description de cours Math" },
  { id: 2, title: "Base de données", description: "Description de cours Base de données" },
  { id: 3, title: "Systèmes d'exploitation", description: "Description de cours Systèmes d'exploitation" },
  { id: 4, title: "Réseaux", description: "Description de cours Réseaux" },
  { id: 5, title: "Programmation web", description: "Description de cours Programmation web" },
  { id: 6, title: "Programmation mobile", description: "Description de cours Programmation mobile" },
];

export default function DashboardCoursEtudiant() {
  return (
      <div className='dashboard_cours_etudiant'>
        <Sidebar></Sidebar>
        <div className='right_content'>
          <Topbar></Topbar>
          <div className="cours-container">
            {cours.map((course) => (
              <Link key={course.id} to={`/cours/${course.id}`}>
                <Cours title={course.title} description={course.description} />
              </Link>
            ))}
          </div>
        </div>
      </div>
  );
}

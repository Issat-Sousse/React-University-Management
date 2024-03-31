import React from 'react'
import Sidebar from '../Sidebar'
import Cours from './Cours'
import '../../../../Styles/cours.css';
import Topbar from '../../../Global/Topbar';

const cours = [
  { title: "Math", description: "Description de cours Math" },
  { title: "Base de données", description: "Description de cours Base de données" },
  { title: "Systèmes d'exploitation", description: "Description de cours Systèmes d'exploitation" },
  { title: "Réseaux", description: "Description de cours Réseaux" },
  { title: "Programmation web", description: "Description de cours Programmation web" },
  { title: "Programmation mobile", description: "Description de cours Programmation mobile" },
]

const num=0

export default function DashboardCoursEtudiant() {
  return (
    <div className='dashboard_cours_etudiant'>
      <Sidebar></Sidebar>
      <div className='right_content'>
      <Topbar></Topbar>
        <div className="cours-container">
          {cours.map((course, index) => (
            <Cours key={index} title={course.title} description={course.description} />
          ))}
        </div>
      </div>
      
    </div>
  )
}

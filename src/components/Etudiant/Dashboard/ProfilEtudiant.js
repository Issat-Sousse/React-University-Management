import React from 'react'
import Sidebar from './Sidebar'
import Profil from '../../Global/Profil/Profil'

function ProfilEtudiant() {
  return (
    <Profil sidebarComponent={Sidebar}></Profil>
  )
}

export default ProfilEtudiant
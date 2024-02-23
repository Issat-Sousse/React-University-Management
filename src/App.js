import React, { Component } from 'react';
import './App.css';
import {Route ,Routes} from 'react-router';
import { BrowserRouter } from "react-router-dom";

import Calendar from './components/Global/CalendarEvents';
import Bibliotheque from './components/Global/Bibliotheque';
import EmploisEtudiant from './components/Global/Emplois';
import Actualites from './components/Global/Actualites';
import Profil from './components/Global/Profil';

import PresenceEtudiant from './components/Etudiant/Dashboard/Presence/Presence';
import NoteEtudiant from './components/Etudiant/Dashboard/Note/Note';
import CoursEtudiant from './components/Etudiant/Dashboard/Cours/Cours';
import VieEstudiantine from './components/Etudiant/Dashboard/VieEstudiantine/VieEstudiantine';
import AuthEtudiant from './components/Etudiant/Registration/AuthEtudiant'
import DashboardEtudiant from './components/Etudiant/Dashboard/Dashboard';

import PresenceEnseignant from './components/Enseignant/Dashboard/Presence/Presence';
import CoursEnseignant from './components/Enseignant/Dashboard/Cours/Cours';
import DashboardEnseignant from './components/Enseignant/Dashboard/Dashboard';

import DashboardAdmin from './components/Admin/Dashboard/Dashboard';
import GestionAct from './components/Admin/Dashboard/GestionAct/GestionAct';
import GestionBib from './components/Admin/Dashboard/GestionBib/GestionBib';
import GestionCalendar from './components/Admin/Dashboard/GestionCalendar/GestionCalendar';
import GestionClub from './components/Admin/Dashboard/GestionClub/GestionClub';
import GestionEmploi from './components/Admin/Dashboard/GestionEmploi/GestionEmploi';
import GestionNote from './components/Admin/Dashboard/GestionNote/GestionNote';
import GestionPresence from './components/Admin/Dashboard/GestionPresence/GestionPresence';
import GestionProfil from './components/Admin/Dashboard/GestionProfil/GestionProfil';



class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>

              {/*Etudiant */}
              <Route path='/' Component={AuthEtudiant}></Route>
              <Route path='/dashboardEtudiant' Component={DashboardEtudiant}></Route>
              <Route path='/presenceEtudiant' Component={PresenceEtudiant}></Route>
              <Route path='/noteEtudiant' Component={NoteEtudiant}></Route>
              <Route path='/coursEtudiant' Component={CoursEtudiant}></Route>
              <Route path='/vieEstudiantine' Component={VieEstudiantine}></Route>

              {/*Etudiant et enseignant*/}
              <Route path='/calendar' Component={Calendar}></Route>
              <Route path='/bibliotheque' Component={Bibliotheque}></Route>
              <Route path='/emplois' Component={EmploisEtudiant}></Route>
              <Route path='/actualites' Component={Actualites}></Route>
              <Route path='/profil' Component={Profil}></Route>

              {/*Enseignant*/}
              <Route path='/dashboardEnseignant' Component={DashboardEnseignant}></Route>
              <Route path='/presenceEnseignant' Component={PresenceEnseignant}></Route>
              <Route path='/coursEnseignant' Component={CoursEnseignant}></Route>

              {/*Admin */}
              <Route path='/dashboardAdmin' Component={DashboardAdmin}></Route>
              <Route path='/GestionActualites' Component={GestionAct}></Route>
              <Route path='/GestionBib' Component={GestionBib}></Route>
              <Route path='/gestionCalendar' Component={GestionCalendar}></Route>
              <Route path='/gestionClub' Component={GestionClub}></Route>
              <Route path='/gestionEmplois' Component={GestionEmploi}></Route>
              <Route path='/gestionNote' Component={GestionNote}></Route>
              <Route path='/gestionPresence' Component={GestionPresence}></Route>
              <Route path='/gestionProfil' Component={GestionProfil}></Route>

          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

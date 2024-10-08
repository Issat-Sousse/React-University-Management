import React, { Component } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Calendar from "./components/Global/CalendarEvents";
import Bibliotheque from "./components/Global/Bibliotheque";
import EmploisEtudiant from "./components/Global/Emplois";
import Profil from "./components/Global/Profil/Profil";

import PresenceEtudiant from "./components/Etudiant/Dashboard/Presence/Presence";
import NoteEtudiant from "./components/Etudiant/Dashboard/Note/Note";
import CoursEtudiant from "./components/Etudiant/Dashboard/Cours/DashboardCoursEtudiant";
import VieEstudiantine from "./components/Etudiant/Dashboard/VieEstudiantine/VieEstudiantine";
import Clubs from "./components/Etudiant/Dashboard/VieEstudiantine/Clubs";
import Centre4C from "./components/Etudiant/Dashboard/VieEstudiantine/Centre4C";
import Association from "./components/Etudiant/Dashboard/VieEstudiantine/Association";
import Incubateur from "./components/Etudiant/Dashboard/VieEstudiantine/Incubateur";
import AuthEtudiant from "./components/Etudiant/Registration/AuthEtudiant";
import DashboardEtudiant from "./components/Etudiant/Dashboard/Dashboard";
import ListeCours from "./components/Etudiant/Dashboard/Cours/ListeCours";
import ActualitesEtudiant from "./components/Etudiant/Dashboard/ActualitesEtudiant";
import StagePfeLaravel from "./components/Etudiant/Dashboard/StagePfeLaravel";

import PresenceEnseignant from "./components/Enseignant/Dashboard/Presence/Presence";
import CoursEnseignant from "./components/Enseignant/Dashboard/Cours/AddCours";
import ListeCoursEnseignant from "./components/Enseignant/Dashboard/Cours/CoursListe";
import DashboardEnseignant from "./components/Enseignant/Dashboard/Dashboard";
import ActualitesEnseignant from "./components/Enseignant/Dashboard/ActualitesEnseignant";
import DashboardAdmin from "./components/Admin/Dashboard/Dashboard";
import GestionAct from "./components/Admin/Dashboard/GestionAct/GestionAct";
import GestionBib from "./components/Admin/Dashboard/GestionBib/GestionBib";
import GestionCalendar from "./components/Admin/Dashboard/GestionCalendar/GestionCalendar";
import GestionVieEst from "./components/Admin/Dashboard/GestionVieEst/GestionVieEst";
import GestionClub from "./components/Admin/Dashboard/GestionVieEst/GestionClub";
import GestionAssociation from "./components/Admin/Dashboard/GestionVieEst/GestionAssociation";
import GestionIncubateur from "./components/Admin/Dashboard/GestionVieEst/GestionIncub";
import Gestion4C from "./components/Admin/Dashboard/GestionVieEst/Gestion4c";
import Ajouter4C from "./components/Admin/Dashboard/GestionVieEst/Ajout4c";
import AjouterClub from "./components/Admin/Dashboard/GestionVieEst/AjoutClub";
import AjouterIncubateur from "./components/Admin/Dashboard/GestionVieEst/AjoutIncub";
import AjouterAssociation from "./components/Admin/Dashboard/GestionVieEst/AjoutAssociation";
import GestionEmploi from "./components/Admin/Dashboard/GestionEmploi/GestionEmploi";
import GestionNote from "./components/Admin/Dashboard/GestionNote/GestionNote";
import GestionPresence from "./components/Admin/Dashboard/GestionPresence/GestionPresence";
import GestionProfil from "./components/Admin/Dashboard/GestionProfil/GestionProfil";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            {/*Etudiant */}
            <Route path="/" Component={AuthEtudiant}></Route>
            <Route
              path="/dashboardEtudiant"
              Component={DashboardEtudiant}
            ></Route>
            <Route
              path="/presenceEtudiant"
              Component={PresenceEtudiant}
            ></Route>
            <Route path="/noteEtudiant" Component={NoteEtudiant}></Route>
            <Route path="/coursEtudiant" Component={CoursEtudiant}></Route>
            <Route path="/vieEstudiantine" Component={VieEstudiantine}></Route>
            <Route path="/clubs" Component={Clubs}></Route>
            <Route path="/4c" Component={Centre4C}></Route>
            <Route path="/association" Component={Association}></Route>
            <Route path="/incubateur" Component={Incubateur}></Route>
            <Route path="/cours/:id" Component={ListeCours}></Route>
            <Route path="/StagePfeLaravel" Component={StagePfeLaravel}></Route>
            <Route
              path="/actualitesEtudiant"
              Component={ActualitesEtudiant}
            ></Route>

            <Route path="/StagePfeLaravel" Component={StagePfeLaravel}></Route>
            {/*Etudiant et enseignant*/}
            <Route path="/calendar" Component={Calendar}></Route>
            <Route path="/bibliotheque" Component={Bibliotheque}></Route>
            <Route path="/emplois" Component={EmploisEtudiant}></Route>
            <Route path="/profil" Component={Profil}></Route>

            {/*Enseignant*/}
            <Route
              path="/dashboardEnseignant"
              Component={DashboardEnseignant}
            ></Route>
            <Route
              path="/presenceEnseignant"
              Component={PresenceEnseignant}
            ></Route>
            <Route path="/coursEnseignant" Component={CoursEnseignant}></Route>
            <Route
              path="/listeCoursEnseignant"
              Component={ListeCoursEnseignant}
            ></Route>
            <Route
              path="/listeCoursEnseignant"
              Component={ListeCoursEnseignant}
            ></Route>
            <Route
              path="/actualitesEnseignant"
              Component={ActualitesEnseignant}
            ></Route>

            {/*Admin */}
            <Route path="/dashboardAdmin" Component={DashboardAdmin}></Route>
            <Route path="/GestionActualites" Component={GestionAct}></Route>
            <Route path="/GestionBib" Component={GestionBib}></Route>
            <Route path="/gestionCalendar" Component={GestionCalendar}></Route>
            <Route path="/gestionVieEst" Component={GestionVieEst}></Route>
            <Route path="/gestionClub" Component={GestionClub}></Route>
            <Route
              path="/gestionAssociation"
              Component={GestionAssociation}
            ></Route>
            <Route
              path="/gestionIncubateur"
              Component={GestionIncubateur}
            ></Route>
            <Route path="/gestion4C" Component={Gestion4C}></Route>
            <Route path="/ajouterClub" Component={AjouterClub}></Route>
            <Route
              path="/ajouterAssociation"
              Component={AjouterAssociation}
            ></Route>
            <Route
              path="/ajouterIncubateur"
              Component={AjouterIncubateur}
            ></Route>
            <Route path="/ajouter4C" Component={Ajouter4C}></Route>
            <Route path="/gestionEmplois" Component={GestionEmploi}></Route>
            <Route path="/gestionNote" Component={GestionNote}></Route>
            <Route path="/gestionPresence" Component={GestionPresence}></Route>
            <Route path="/gestionProfil" Component={GestionProfil}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

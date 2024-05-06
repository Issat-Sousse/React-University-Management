import React from "react";
import Grid from "@mui/system/Unstable_Grid";
import Item from "../../Global/item"; // Assurez-vous que le chemin d'importation est correct
import ItemTitle from "../../Global/itemTitle";
export default function Stage() {
  return (
    <div>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <ItemTitle title="Offres de stages / Emplois" />
        </Grid>
        <Grid item xs={6}>
          <Item
            title="Stage PFE"
            description="Une plateforme de gestion des remplacements entre les médecins: Laravel"
            buttonText="Découvrir Plus"
            to="/StagePfeLaravel"
          />
        </Grid>
        <Grid item xs={6}>
          <Item
            title="Stage d'été"
            description="Offre de stage Full Stack Django/ReactJS Developer Inter"
            buttonText="Découvrir Plus"
            to=""
          />
        </Grid>
        <Grid item xs={6}>
          <Item
            title="Stage PFE"
            description="Offre de stage développeur des applications Web & Mobile – Full-Stack"
            buttonText="Découvrir Plus"
            to=""
          />
        </Grid>
        <Grid item xs={6}>
          <Item
            title="Stage PFE"
            description="Chargé(e) de conception et développement des applications Web - Back-End"
            buttonText="Découvrir Plus"
            to="/association"
          />
        </Grid>
      </Grid>
    </div>
  );
}

import React from "react";
import Grid from "@mui/system/Unstable_Grid";
import ItemTitle from "../../Global/itemTitleCard"; // Assurez-vous que le chemin d'importation est correct

export default function CardHead() {
  return (
    <div>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
        <Grid item xs={4}>
          <ItemTitle title="NOMBRE D'ETUDIANTS : 2000" />
        </Grid>
        <Grid item xs={4}>
          <ItemTitle title="NOMBRE D'ENSEIGNANTS : 200" />
        </Grid>
        <Grid item xs={4}>
          <ItemTitle title="NOMBRE DE SALLES : 120" />
        </Grid>
      </Grid>
    </div>
  );
}

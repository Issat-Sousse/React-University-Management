import React from "react";
import Grid from "@mui/system/Unstable_Grid";

export default function Chart1() {
  return (
    <div>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
        <Grid item xs={6}>
          <img
            src={require(`../../../Assets/chart1.PNG`)}
            alt=""
            className="chart h-44 w-44 rounded-full cardimg"
          />
        </Grid>
        <Grid item xs={6}>
          <img
            src={require(`../../../Assets/chart2.PNG`)}
            alt=""
            className="chart h-44 w-44 rounded-full cardimg"
          />
        </Grid>
      </Grid>
    </div>
  );
}

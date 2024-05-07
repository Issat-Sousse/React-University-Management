import React from "react";
import Grid from "@mui/system/Unstable_Grid";

export default function Chart2() {
  return (
    <div>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
        <Grid item xs={12}>
          <img
            src={require(`../../../Assets/chart3.PNG`)}
            alt=""
            className="chart3 h-44 w-44 rounded-full cardimg"
          />
        </Grid>
      </Grid>
    </div>
  );
}

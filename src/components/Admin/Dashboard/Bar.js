import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";

const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};
const dataset = [
  {
    Cycle_Ingénieur: 20,
    Licence: 87,
    Master: 86,
    Doctorat: 65,
    month: "Jan",
  },
  {
    Cycle_Ingénieur: 22,
    Licence: 57,
    Master: 86,
    Doctorat: 60,
    month: "Fev",
  },
  {
    Cycle_Ingénieur: 59,
    Licence: 57,
    Master: 86,
    Doctorat: 21,
    month: "Mar",
  },
  {
    Cycle_Ingénieur: 59,
    Licence: 57,
    Master: 86,
    Doctorat: 21,
    month: "Apr",
  },
  {
    Cycle_Ingénieur: 59,
    Licence: 57,
    Master: 86,
    Doctorat: 21,
    month: "May",
  },
  {
    Cycle_Ingénieur: 59,
    Licence: 57,
    Master: 86,
    Doctorat: 21,
    month: "June",
  },
  {
    Cycle_Ingénieur: 59,
    Licence: 57,
    Master: 86,
    Doctorat: 21,
    month: "July",
  },
  {
    Cycle_Ingénieur: 59,
    Licence: 57,
    Master: 86,
    Doctorat: 21,
    month: "Aug",
  },
  {
    Cycle_Ingénieur: 59,
    Licence: 57,
    Master: 86,
    Doctorat: 21,
    month: "Sept",
  },
  {
    Cycle_Ingénieur: 59,
    Licence: 57,
    Master: 86,
    Doctorat: 21,
    month: "Oct",
  },
  {
    Cycle_Ingénieur: 59,
    Licence: 57,
    Master: 86,
    Doctorat: 21,
    month: "Nov",
  },
  {
    Cycle_Ingénieur: 59,
    Licence: 57,
    Master: 86,
    Doctorat: 21,
    month: "Dec",
  },
];

const valueFormatter = (value) => `${value}mm`;

export default function Bar() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: "band", dataKey: "month" }]}
      series={[
        {
          dataKey: "Cycle_Ingénieur",
          label: "Cycle Ingénieur",
          valueFormatter,
        },
        { dataKey: "Licence", label: "Licence", valueFormatter },
        { dataKey: "Master", label: "Master", valueFormatter },
        { dataKey: "Doctorat", label: "Doctorat", valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}

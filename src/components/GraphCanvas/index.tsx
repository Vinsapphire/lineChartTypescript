import React from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import { selectPoints } from "../../store/points/selectors";
import { IPoint } from "../../store/points/types";

interface IDataLine {
  label: string;
  data: number[];
  fill: boolean;
  borderColor: string;
}

interface ILineConfig {
  labels: number[];
  datasets: IDataLine[];
}

const prepareGraphData = (data: IPoint[]): ILineConfig => {
  let datasets: IDataLine[] = [];

  data.forEach((point: IPoint) => {
    datasets.push({
      label: point.name,
      data: point.y,
      fill: false,
      borderColor: "#" + (((1 << 24) * Math.random()) | 0).toString(16),
    });
  });
  const lineConfig = {
    labels: data[0].x,
    datasets: datasets,
  };

  return lineConfig;
};

const GraphCanvas = () => {
  const points = useSelector(selectPoints);

  if (points.length === 0) {
    return <div className="canvas"></div>;
  }

  const data = prepareGraphData(points);

  return (
    <div className="canvas">
      <Line data={data} />
    </div>
  );
};

export default GraphCanvas;

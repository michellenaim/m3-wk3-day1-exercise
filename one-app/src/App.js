import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import BarChart from "./animated-bar-chart-using-react-move/src/BarChart";
// import Vertex from "./react-vertex-sphere-of-spheres/src/index";
import App2 from "./collapsible-tree-w-vx//src/Tree";
import data from "./collapsible-tree-w-vx/src/data";

function App() {
  return (
    <div>
      <BarChart />
      <App2 data={data} width={600} height={500} />
      {/* <Vertex /> */}
    </div>
  );
}

export default App;

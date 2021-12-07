import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "@react-vertex/core";
// import { useViewportSize } from "@react-vertex/dom-hooks";
import Scene from "./Scene";

function Vertex() {
  // const { width, height } = useViewportSize();
  const width = "100px";
  const height = "100px";

  return (
    <Canvas width={width} height={height}>
      <Scene />
    </Canvas>
  );
}

export default Vertex;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Vertex />, rootElement);

/* NOTE TO FUTURE SELF

  I added this to index.html:
  
  <style>
    html, body, div {
      margin: 0;
      padding: 0;
      border: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  </style>
*/

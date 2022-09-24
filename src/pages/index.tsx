import type { NextPage } from "next";
import Canvas from "sketches/canvas";
import squares from "sketches/squares";

const Home: NextPage = () => {
  return <>
  <Canvas sketch={squares}/>

  </>;
};

export default Home;

import type { NextPage } from "next";
import dynamic from "next/dynamic";

import squares from "sketches/squares";

const Canvas = dynamic(() => import("sketches/canvas"), { ssr: false });

const Home: NextPage = () => {
  return (
    <>
      <Canvas sketch={squares} />
    </>
  );
};

export default Home;

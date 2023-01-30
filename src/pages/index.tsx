import type { NextPage } from "next";
import dynamic from "next/dynamic";

import rhombus from "sketches/rhombus";

const Canvas = dynamic(() => import("sketches/canvas"), { ssr: false });

const Home: NextPage = () => {

  return (
    <>
      <Canvas sketch={rhombus} />
    </>
  );
};

export default Home;

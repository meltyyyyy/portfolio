import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Canvas = dynamic(() => import("sketches/canvas"), { ssr: false });

const Home: NextPage = () => {
  return (
    <>
      <Canvas />
    </>
  );
};

export default Home;

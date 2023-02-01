import p5 from "p5";
import { useEffect } from "react";
import rhombus from "./rhombus";

const Canvas = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    new p5(rhombus)
  }, []);
  return <></>;
};

export default Canvas

import p5 from "p5";
import { useEffect } from "react";

const Canvas = (props: any) => {
  useEffect(() => {
    new p5(props.sketch)
  }, [props.sketch]);
  return <></>;
};

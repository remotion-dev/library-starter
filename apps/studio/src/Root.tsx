import { Composition } from "remotion";
import UseSecondExample from "./UseSecondExample";

const Root = () => {
  return (
    <>
      <Composition
        id="hook-example"
        component={UseSecondExample}
        durationInFrames={30 * 10}
        fps={30}
        height={1080}
        width={1920}
      />
    </>
  );
};

export default Root;

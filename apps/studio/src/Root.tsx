import { Composition } from "remotion";
import UseSecondExample from "./UseSecondExample";
import FadeOutExample from "./FadeOutExample";

const Root = () => {
  return (
    <>
      <Composition
        id="custom-component-example"
        component={FadeOutExample}
        durationInFrames={30 * 3}
        fps={30}
        height={1080}
        width={1920}
      />
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

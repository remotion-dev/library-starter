import React from "react";
import { FadeOut } from "example-components";
import { AbsoluteFill } from "remotion";

const FadeOutExample = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      <FadeOut
        fadeOutDurationInS={2}
        style={{
          backgroundColor: "white",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: 300, fontFamily: "sans-serif", color: "black" }}>
          Fade out
        </h1>
      </FadeOut>
    </AbsoluteFill>
  );
};

export default FadeOutExample;

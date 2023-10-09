import React from "react";
import {
  useCurrentFrame,
  AbsoluteFill,
  useVideoConfig,
  interpolate,
} from "remotion";

export const FadeOut = ({
  children,
  fadeOutDurationInS,
  ...props
}: {
  children?: React.ReactNode;
  fadeOutDurationInS: number;
} & React.ComponentProps<typeof AbsoluteFill>) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const opacity =
    frame < durationInFrames - fps * fadeOutDurationInS
      ? 1
      : interpolate(
          frame,
          [durationInFrames - fps * fadeOutDurationInS, durationInFrames],
          [1, 0],
        );

  return (
    <AbsoluteFill
      {...props}
      style={{
        opacity,
        ...props.style,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

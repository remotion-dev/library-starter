import { useCurrentSecond } from "use-second";
import { AbsoluteFill } from "remotion";

export default function UseSecondExample() {
  const second = useCurrentSecond();

  return (
    <AbsoluteFill
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        color: "black",
        fontSize: "100px",
        fontFamily: "sans-serif",
        gap: "100px",
      }}
    >
      <p style={{ fontSize: "50px" }}>Currently playing</p> {second.toFixed(2)}
    </AbsoluteFill>
  );
}

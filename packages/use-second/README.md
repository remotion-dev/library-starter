## Use Second

A react hook for use with [Remotion](https://remotion.dev/) that returns the current second based on current frame and fps.

Part of Remotion Library Starter as an example hook.

### Usage

```tsx
import { useSecond } from "use-second";
import { Composition, AbsoluteFill } from "remotion";
import { render} from React;

export const MyVideo: React.FC = () => {
  const second = useSecond();

  return (
    <AbsoluteFill>
      <h1>Second: {second}</h1>
    </AbsoluteFill>
  );
};

render(
  <Composition
    fps={30}
    durationInFrames={30 * 10}
    component={MyVideo}
    width={1080}
    height={1080}
  />,
  document.getElementById("root")
);
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

import { Canvas, Circle, SkImage, useImage } from "@shopify/react-native-skia";
import { useEffect, useState } from "react";

const App = () => {
  const [hero, setHero] = useState<(SkImage | null)[]>();
  useEffect(() => {
    const arr = [];

    const heroIdle = useImage(
      require("../assets/Hero/Pink_Monster_Idle_4.png")
    );
    arr.push(heroIdle);

    setHero(arr);
  }, []);

  return (
    <Canvas style={{ width: 1000, height: 250 }}>
      <Circle r={128} cx={128} cy={128} color="red" />
    </Canvas>
  );
};

export default App;

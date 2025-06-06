import { Canvas, Circle } from "@shopify/react-native-skia";
import { useEffect, useState } from "react";

const App = () => {
  const [hero, setHero] = useState([]);
  useEffect(() => {
    const arr = [];
    const HeroIdle = new Image();
    HeroIdle.src = "";
  }, []);

  return (
    <Canvas style={{ width: 1000, height: 250 }}>
      <Circle r={128} cx={128} cy={128} color="red" />
    </Canvas>
  );
};

export default App;

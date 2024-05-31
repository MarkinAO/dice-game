import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Cube } from "@shared/ui/cube";

export function RollDice() { 
  return (
    <>
      <Canvas style={{height: "130px"}}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={10} />
        <directionalLight position={[2, 1, 1]}/>
        <Cube />
      </Canvas>
    </>
  );
}


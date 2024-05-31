import { useFrame, useLoader } from "@react-three/fiber";
import { Mesh, TextureLoader } from "three";
import { useRef } from "react";
import { DICE_IMAGES } from "@shared/consts";

export function Cube() {
    const mesh = useRef<Mesh>(null)
    useFrame((_state, delta) => {
      if(mesh.current) {
        mesh.current.rotation.x += delta * 10
        mesh.current.rotation.y += delta * 2
        mesh.current.rotation.z += delta * 3
      }
    })
  
    const side_0 = useLoader(TextureLoader, DICE_IMAGES[0])
    const side_1 = useLoader(TextureLoader, DICE_IMAGES[1])
    const side_2 = useLoader(TextureLoader, DICE_IMAGES[2])
    const side_3 = useLoader(TextureLoader, DICE_IMAGES[3])
    const side_4 = useLoader(TextureLoader, DICE_IMAGES[4])
    const side_5 = useLoader(TextureLoader, DICE_IMAGES[5])
  
    return(
      <mesh ref={mesh}>
        <boxGeometry args={[3.5, 3.5, 3.5]}/>
        <meshStandardMaterial map={side_0} attach="material-0" />
        <meshStandardMaterial map={side_1} attach="material-1" />
        <meshStandardMaterial map={side_2} attach="material-2" />
        <meshStandardMaterial map={side_3} attach="material-3" />
        <meshStandardMaterial map={side_4} attach="material-4" />
        <meshStandardMaterial map={side_5} attach="material-5" />
      </mesh>
    )
  }
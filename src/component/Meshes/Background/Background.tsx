import { useLoader } from "@react-three/fiber";
import { BackSide, TextureLoader } from "three";
import background from "../../../assets/autoshop.jpg"

export const Background = () => {
  const texture = useLoader(TextureLoader, background);

  return (
    <mesh>
      <meshBasicMaterial
        map={texture}
        side={BackSide}
      />
      <sphereBufferGeometry
        args={[500, 100, 100]}
      />
    </mesh>
  )
}

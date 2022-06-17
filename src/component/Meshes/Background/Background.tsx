import { useLoader } from "@react-three/fiber";
import { BackSide, TextureLoader } from "three";
import background from "../../../assets/autoshop.jpg"

export const Background = () => {
  const texture = useLoader(TextureLoader, background);

  // const { gl } = useThree();

  // const formatted = new WebGLCubeRenderTarget(
  //   texture.image.height
  // ).fromEquirectangularTexture(gl, texture);

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

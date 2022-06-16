import { useLoader, useThree } from "@react-three/fiber";
import { TextureLoader, WebGLCubeRenderTarget } from "three";
import background from "../../assets/autoshop.jpg"

export const Background = () => {
  const texture = useLoader(TextureLoader, background);
  
  const { gl } = useThree();

  const formatted = new WebGLCubeRenderTarget(
    texture.image.height
  ).fromEquirectangularTexture(gl, texture);

  return (
    <primitive 
      attach={"background"}
      object={formatted.texture}
    />
  )
}

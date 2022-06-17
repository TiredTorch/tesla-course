import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"


export const Car = () => {

  const model = useLoader(GLTFLoader, "assets/2car/scene.gltf")

  return (
    <primitive object={model.scene} scale={[1, 1, 1]}/>
  )
}

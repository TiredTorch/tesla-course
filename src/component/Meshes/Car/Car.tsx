import { useBox } from "@react-three/cannon"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"


export const Car = () => {
  const [ref] = useBox<any>(() => ({ mass: 1, args: [4.5, 1.5, 1.8], position: [0, 2, 0], offset: [0, 0, 5] }))
  const model = useLoader(GLTFLoader, "assets/2car/scene.gltf")

  return (
    <group
    ref={ref}>
      <primitive
        castShadow
        object={model.scene}
        scale={[1, 1, 1]}
        position={[0, -.75, 0]}
      />
    </group>
  )
}

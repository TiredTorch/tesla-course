import { useBox } from "@react-three/cannon"
import { ObjectMap, useLoader } from "@react-three/fiber"
import { FC, useEffect } from "react"
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"


export const Car: FC<any> = ({
  position,
  offset,
  modelPath,
  rotation
}) => {
  const [ref] = useBox<any>(() => ({ mass: 1, args: [4.5, 1.5, 1.8], position: offset }))
  const model: any = useLoader(GLTFLoader, modelPath)

  useEffect(() => {
    console.log(ref.current.children[0].children[0].children[0].children[0])

  }, [])


  return (
    <group
      ref={ref}>
      <primitive
        castShadow
        object={model.scene}
        scale={[1, 1, 1]}
        position={position}
        rotation={rotation}
      />
    </group>
  )
}

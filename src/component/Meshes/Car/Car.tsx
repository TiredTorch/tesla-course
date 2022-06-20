import { useBox } from "@react-three/cannon"
import { useGLTF } from "@react-three/drei"
import { ObjectMap, useLoader } from "@react-three/fiber"
import { FC, useEffect } from "react"
import { FrontSide } from "three"
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"


export const Car: FC<any> = ({
  position,
  offset,
  modelPath,
  rotation
}) => {
  const [ref] = useBox<any>(() => ({ mass: 1, args: [4.5, 1.5, 1.8], position: offset }))
  const model: any = useLoader(GLTFLoader, modelPath)

  model.scene.traverse((child: any) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = FrontSide
    }
  })
  
  useGLTF.preload(modelPath)

  return (
    <group
      ref={ref}
      castShadow
      receiveShadow
    >
      <primitive
        rec
        object={model.scene}
        scale={[1, 1, 1]}
        position={position}
        rotation={rotation}
      />
    </group>
  )
}

import { useBox } from "@react-three/cannon"
import { useGLTF } from "@react-three/drei"
import { ObjectMap, useLoader } from "@react-three/fiber"
import { FC, useEffect } from "react"
import { FrontSide, Group, Mesh, MeshStandardMaterial, Object3D } from "three"
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { CarProps } from "./Cat.types"


export const Car: FC<CarProps> = ({
  position,
  offset,
  modelPath,
  rotation
}) => {
  const [ref] = useBox<Group>(() => ({ mass: 1, args: [4.5, 1.5, 1.8], position: offset }))
  const model: GLTF = useLoader(GLTFLoader, modelPath)

  model.scene.traverse((child: Object3D) => {
    const meshChild = child as Mesh
    if (meshChild.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      const childMaterial = meshChild.material as MeshStandardMaterial
      childMaterial.side = FrontSide
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

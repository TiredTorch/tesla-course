import { useLoader } from "@react-three/fiber"
import { TextureLoader, Vector3 } from "three"
import modelTexture from "../../../assets/wood.jpg"
import { FC, useEffect, useState } from "react"
import { useSphere } from "@react-three/cannon"

export const BasicSphere: FC<any> = ({ phisProp }) => {

  const [ref, api] = useSphere<any>(() => ({ mass: 1, ...phisProp }))
  const texture = useLoader(TextureLoader, modelTexture);

  useEffect(() => {
    api.mass.set(0)
  }, [])
  

  return (
    <mesh
      ref={ref}
      scale={1}
      position={new Vector3(0, 2, 0)}
    >
      <sphereBufferGeometry
        attach={"geometry"}
        args={[2, 100, 100]}
      />
      <meshPhysicalMaterial
        attach={"material"}
        map={texture}
      />
    </mesh>
  )
}

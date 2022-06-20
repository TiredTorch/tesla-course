import { FC } from "react"
import { BoxProps, useBox } from "@react-three/cannon"
import { Mesh } from "three"

export const Floor: FC<Partial<BoxProps>> = (phisProp) => {

  const [ref] = useBox<Mesh>(() => ({...phisProp, mass: 0 ,args: [10, 1, 20]}))
  
  return (
    <mesh
      visible
      ref={ref}
      position={[2, -.1, 2]}
      receiveShadow
    >
      <boxBufferGeometry
        attach={"geometry"}
        args={[200, 1, 200]}
      />
      <meshPhysicalMaterial
        attach={"material"}
        color={"white"}
        transparent
        opacity={0.5}
      />
    </mesh>
  )
}

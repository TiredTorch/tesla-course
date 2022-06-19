import { useBox } from "@react-three/cannon"
import { useFrame } from "@react-three/fiber"
import { FC, useEffect } from "react"

export const Floor: FC<any> = ({phisProp}) => {

  const [ref] = useBox<any>(() => ({mass: 0 ,args: [10, 1, 20, 20, 20, 20],  ...phisProp}))
  
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

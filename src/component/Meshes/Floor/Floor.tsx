import { useBox } from "@react-three/cannon"
import { FC } from "react"

export const Floor: FC<any> = ({phisProp}) => {

  const [ref, api] = useBox<any>(() => ({...phisProp}))

  return (
    <mesh
      ref={ref}
      position={[2, -.1, 2]}
    >
      <boxBufferGeometry
        args={[10, .1, 20]}
      />
      <meshPhysicalMaterial
        color={"white"}
      />
    </mesh>
  )
}

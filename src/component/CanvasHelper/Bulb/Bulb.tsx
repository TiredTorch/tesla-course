import { FC } from "react"

export const Bulb: FC<any> = ({
  position
}) => {
  return (
    <mesh
      position={position}
    >
      <sphereBufferGeometry args={[.3, 100, 100]} />
      <meshPhongMaterial emissive={"yellow"} />
      <pointLight
        intensity={.9}
        castShadow
        shadow-mapSize-height={2**9}
        shadow-mapSize-width={2**9}
      />
    </mesh>
  )
}

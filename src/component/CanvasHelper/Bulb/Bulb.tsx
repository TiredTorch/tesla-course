import { FC, useEffect, useRef } from "react"
import { BulbProps } from "./Bulb.types"

export const Bulb: FC<BulbProps> = ({
  position
}) => {

  return (
    <mesh
      position={position}
    >
      <sphereBufferGeometry args={[.3, 100, 100]} />
      <meshPhongMaterial emissive={"yellow"} />
      <pointLight
        intensity={.4}
        castShadow
        shadow-mapSize-height={2 ** 9}
        shadow-mapSize-width={2 ** 9}
      />
    </mesh>
  )
}

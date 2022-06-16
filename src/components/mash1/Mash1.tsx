import { FC, useRef } from "react"
import { Mesh } from "three"
import { useFrame } from "@react-three/fiber"
import { Mesh1Types } from "./Mash1.types"

export const Mash1: FC<Mesh1Types> = ({
  config
}) => {

  const ref = useRef<Mesh>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += .01;
      ref.current.rotation.y += .01;
    }
  })

  return (
    <mesh
      ref={ref}
      {...config}
    >
      <boxBufferGeometry args={[.3, .3, .3]}/>
      <meshBasicMaterial color={"blue"} />
    </mesh>
  )
}

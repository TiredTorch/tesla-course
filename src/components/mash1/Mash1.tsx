import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh } from "three"

export const Mash1 = () => {

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
    >
      <boxBufferGeometry />
      <meshBasicMaterial color={"blue"} />
    </mesh>
  )
}

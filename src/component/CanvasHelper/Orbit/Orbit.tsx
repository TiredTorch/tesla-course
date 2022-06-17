import { OrbitControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { FC } from "react"
import { useStore } from "../../../zustand/store.zus"

export const Orbit: FC<any> = () => {
  const {camera, gl} = useThree()

  const isActive = useStore(state => state.orbitActive)

  return (
    <OrbitControls 
    args={[camera, gl.domElement]}
    enableRotate={isActive}
    />
  )
}

import { OrbitControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { FC } from "react"

export const Orbit: FC<any> = () => {
  const {camera, gl} = useThree()

  return (
    <OrbitControls 
    args={[camera, gl.domElement]}
    />
  )
}

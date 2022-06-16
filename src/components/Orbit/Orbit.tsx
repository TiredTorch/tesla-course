import { OrbitControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

export const Orbit = () => {
  const {camera, gl} = useThree()

  return (
    <OrbitControls args={[camera, gl.domElement]}/>
  )
}

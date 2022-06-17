import { OrbitControls as OControls } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { FC, useRef } from "react"
import { OrbitControls } from "three-stdlib"
import { canvasState } from "../../../state/state"

export const Orbit: FC<any> = () => {
  const {camera, gl} = useThree()
  const ref = useRef<OrbitControls>(null)

  useFrame(() => {
    
    if (!canvasState.shouldUpdate) {
      return;
    }
    if(ref.current) {
      ref.current.target.lerp(canvasState.targetPos, 0.1)
      ref.current.update()
    }
  })

  return (
    <OControls 
    ref={ref}
    args={[camera, gl.domElement]}
    />
  )
}

import { useFrame } from "@react-three/fiber"
import { Vector3 } from "three"
import { canvasState } from "../../../state/state"

export const CameraControl = () => {

  useFrame(({ camera, scene }) => {
    if (canvasState.activeMash?.name !== canvasState.activeMashName) {
      canvasState.activeMash = scene.getObjectByName(
        canvasState.activeMashName
      ) || {}
    }
    if (canvasState.shouldUpdate) {
      camera.position.lerp(canvasState.cameraPos, 0.1)
      const diff =
        camera.position.clone()
          .sub(canvasState.cameraPos).length()
      if (diff < 0.1) canvasState.shouldUpdate = true
    }
  })

  return (
    null
  )
}

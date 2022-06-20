import { Object3D, SkinnedMesh, Vector3 } from "three";

type canvasStateTypes = {
  activeMash: Partial<SkinnedMesh>,
  activeMashName: string,
  cameraPos: Vector3
  targetPos: Vector3
  shouldUpdate: boolean
}

export const canvasState: canvasStateTypes = {
  activeMash: {},
  activeMashName: "Object_71",
  cameraPos: new Vector3(4, 2, -3),
  targetPos: new Vector3(0, 0, 0),
  shouldUpdate: true
}
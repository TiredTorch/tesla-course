import { FC } from "react";
import { CameraControl } from "./CameraControl/CameraControl";
import { Orbit } from "./Orbit/Orbit"
import { PassiveLight } from "./PassiveLight/PassiveLight";

export const CanvasHelper: FC<any> = () => {

  
  return (
    <>
      <CameraControl />
      <PassiveLight />
      <Orbit/>
      <axesHelper args={[5]}/>
    </>
  )
}

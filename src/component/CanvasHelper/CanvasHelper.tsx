import { FC } from "react";
import { Orbit } from "./Orbit/Orbit"
import { PassiveLight } from "./PassiveLight/PassiveLight";

export const CanvasHelper: FC<any> = () => {

  
  return (
    <>
      <PassiveLight />
      <Orbit/>
      <axesHelper args={[5]}/>
    </>
  )
}

import { Box } from "@mui/material"
import { Debug, Physics } from "@react-three/cannon"
import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"
import { Provider } from "react-redux"
import { CameraButtons } from "./component/CameraButtons/CameraButtons"
import { CanvasHelper } from "./component/CanvasHelper/CanvasHelper"
import { Background } from "./component/Meshes/Background/Background"
import { BasicSphere } from "./component/Meshes/BasicSphere/BasicSphere"
import { Car } from "./component/Meshes/Car/Car"
import { Floor } from "./component/Meshes/Floor/Floor"

export const App = () => {

  return (
    <Box
      component={"div"}
      sx={{
        height: "100vh",
        width: "100vw"
      }}
    >
      <Canvas
        style={{
          background: "black"
        }}
        camera={{
          position: [6, 4, -5]
        }}
      >
        <Physics>
          <Suspense fallback={null}>
            <Background />


            <BasicSphere
              phisProp={{
                position: [0, 3, 8]
              }}
            />
            <Debug color={"red"} scale={1}>
              <Car />
              <Floor
                phisProp={{
                  position: [0, -1.5, 2],
                  rotation: [0, 0, 0]
                }}
              />
            </Debug>
          </Suspense>
        </Physics>
        <CanvasHelper />
      </Canvas>
      <CameraButtons />
    </Box>
  )
}

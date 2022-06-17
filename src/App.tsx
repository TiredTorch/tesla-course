import { Box } from "@mui/material"
import { Physics } from "@react-three/cannon"
import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"
import { Provider } from "react-redux"
import { CanvasHelper } from "./component/CanvasHelper/CanvasHelper"
import { Background } from "./component/Meshes/Background/Background"
import { BasicSphere } from "./component/Meshes/BasicSphere/BasicSphere"
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
                position: [0, 5, 0]
              }}
            />
            <Floor
              phisProp={{
                position: [0, -3, 2],
                rotation: [Math.PI / 4, 0, 0]
              }}
            />
          </Suspense>
        </Physics>
        <CanvasHelper />
      </Canvas>

    </Box>
  )
}

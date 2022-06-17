import { Box } from "@mui/material"
import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"
import { Provider } from "react-redux"
import { CanvasHelper } from "./component/CanvasHelper/CanvasHelper"
import { Background } from "./component/Meshes/Background/Background"
import { BasicSphere } from "./component/Meshes/BasicSphere/BasicSphere"
import { Floor } from "./component/Meshes/Floor/Floor"
import { store } from "./redux/store"

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
        <Suspense fallback={null}>
            <Background />
            <BasicSphere/>
            <Floor />
          </Suspense>
          <CanvasHelper/>
      </Canvas>

    </Box>
  )
}

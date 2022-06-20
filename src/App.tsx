import { Box } from "@mui/material"
import { Debug, Physics } from "@react-three/cannon"
import { Canvas } from "@react-three/fiber"
import { Bloom, DepthOfField, EffectComposer, GodRays } from "@react-three/postprocessing"
import { Suspense, useRef, useState } from "react"
import { Provider } from "react-redux"
import { CameraButtons } from "./component/CameraButtons/CameraButtons"
import { Bulb } from "./component/CanvasHelper/Bulb/Bulb"
import { CanvasHelper } from "./component/CanvasHelper/CanvasHelper"
import { ColorSelector } from "./component/ColorSelector/ColorSelector"
import { Background } from "./component/Meshes/Background/Background"
import { BasicSphere } from "./component/Meshes/BasicSphere/BasicSphere"
import { Car } from "./component/Meshes/Car/Car"
import { Floor } from "./component/Meshes/Floor/Floor"
import { Soul } from "./component/Meshes/Soul/Soul"

export const App = () => {

  const [lights, setLights] = useState<any>([])

  return (
    <Box
      component={"div"}
      sx={{
        height: "100vh",
        width: "100vw"
      }}
    >
      <Canvas
        shadows
        style={{
          background: "black"
        }}
        camera={{
          position: [6, 4, -5]
        }}
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: false
        }}
      >
        <Physics>
          <Suspense fallback={null}>
            <Background />
            <Car
              offset={[0, 0, 0]}
              position={[0, -.75, 0]}
              rotation={[0, Math.PI / 2, 0]}
              modelPath={"/assets/1car/scene.gltf"}
            />
            <Car
              offset={[0, 0, 8]}
              position={[0, -.75, 0]}
              modelPath={"/assets/2car/scene.gltf"}
            />
            <Floor
              phisProp={{
                position: [0, -1.5, 3.5],
                rotation: [0, 0, 0]
              }}
            />
            <Bulb
              lights={lights}
              setLights={setLights}
              position={[0, 2, 4.5]}
            />
            <Soul
              position={[2, 0, 6]}
              rotation={[0, Math.PI / 2, 0]}
            />
          </Suspense>
        </Physics>
        <EffectComposer>
          <DepthOfField
            focalLength={.02}
            focusDistance={0}
            bokehScale={2}
            height={480}
          />
          <Bloom
            luminanceThreshold={1}
            luminanceSmoothing={0.9}
            height={300}
          />
          {
            (lights.length > 0) && (
              lights.map((item: any) => {
                console.log(item)
                return <GodRays sun={item} />
              })
            )
          }
        </EffectComposer>
        <CanvasHelper />
      </Canvas>
      <CameraButtons />
      <ColorSelector />
    </Box>
  )
}

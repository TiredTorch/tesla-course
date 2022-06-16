import { Box } from "@mui/material"
import { Canvas } from "@react-three/fiber"
import { Bulb } from "./components/Bulb/Bulb"
import { Floor } from "./components/Floor/Floor"
import { Mash1 } from "./components/Mash1/Mash1"
import { Orbit } from "./components/Orbit/Orbit"

export const App = () => {

  return (
    <Box
      component={"div"}
      sx={{
        height: "100vh",
        widht: "100vw"
      }}
    >
      <Canvas
        shadows
        style={{
          background: "black"
        }}
        camera={{
          position: [3, 3, 3]
        }}
      >
        <Mash1 config={{
          position: [.5, .5, 0],
        }} />
        <axesHelper args={[5]} />
        <Orbit />
        <ambientLight 
          intensity={.1}
        />
        <Floor />
        <Bulb />
      </Canvas>
    </Box>
  )
}

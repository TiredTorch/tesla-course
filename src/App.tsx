import { Box } from "@mui/material"
import { Canvas } from "@react-three/fiber"
import { Line1 } from "./components/Line1/Line1"
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
        style={{
          background: "black"
        }}
        camera={{
          position: [3, 3, 3]
        }}
      >
        <Mash1 config={{
          position: [1, 1, 0],
        }} />
        <axesHelper args={[5]} />
        <Orbit />
        <Line1 />
      </Canvas>
    </Box>
  )
}

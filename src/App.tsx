import { Box } from "@mui/material"
import { Canvas } from "@react-three/fiber"
import { Mash1 } from "./components/mash1/Mash1"

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
      >
        <Mash1 />
      </Canvas>
    </Box>
  )
}

import { Line } from "@react-three/drei"

export const Line1 = () => {
  return (
    <Line 
      points={[[0, 0, 0], [0, 2, 2], [0, 3, 2], [0, 3, 3], [0, 2, 3], [0, 2, 2]]}
      color={"red"}
      lineWidth={.3}
    />
  )
}

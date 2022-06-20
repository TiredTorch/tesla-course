import { BoxProps, Triplet } from "@react-three/cannon";

export type CarProps = BoxProps & {
  modelPath: string
  offset?: Triplet
}
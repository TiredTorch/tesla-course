import { ThreeEvent, useLoader, useThree } from "@react-three/fiber"
import { TextureLoader, Vector3 } from "three"
import modelTexture from "../../../assets/wood.jpg"
import { useGesture } from "@use-gesture/react"
import { useSpring, a } from "@react-spring/three"
import { FC, useState } from "react"
import { MeshAttributes } from "./BasicSphere.types"
import { TransformControls } from "@react-three/drei"
import { useStore } from "../../../zustand/store.zus"

export const BasicSphere: FC<any> = () => {

  const [isDraggable, setIsDraggable] = useState(false)
  const [spring, setSpring] = useSpring<MeshAttributes>(() => ({
    position: [0, 1, 0]
  }))


  const toggleIsActive = useStore(state => state.toggleOrbitActive)
  const texture = useLoader(TextureLoader, modelTexture);

  // const { size, viewport } = useThree();
  // const aspect = size.width / viewport.width;

  // const bind: any = useGesture({
  //   onDrag: ({
  //     movement: [z, x], down
  //   }) => {
  //     setSpring({ position: [down ? x / aspect : 0, 1, down ? -z / aspect : 0] })
  //   }
  // })

  const onMouseEnterBall = (e: ThreeEvent<PointerEvent>) => {
    setIsDraggable(false)
  }
  const onMouseExitBall = (e: ThreeEvent<PointerEvent>) => {
    setIsDraggable(false)
  }
  const onMouseEnterControl = (e: ThreeEvent<PointerEvent>) => {
    toggleIsActive(false)
  }
  const onMouseExitControl = (e: ThreeEvent<PointerEvent>) => {
    toggleIsActive(true)
  }

  return (
    <>
      {
        isDraggable
          ? <a.mesh
            // {...spring}
            //{...bind()}
            onPointerEnter={onMouseEnterBall}
            onPointerLeave={onMouseExitBall}
          >
            <sphereBufferGeometry
              attach={"geometry"}
              args={[1, 100, 100]}
            />
            <meshPhysicalMaterial
              attach={"material"}
              map={texture}
            />
          </a.mesh>
          : <TransformControls
            mode="translate"
            onPointerEnter={onMouseEnterControl}
            onPointerLeave={onMouseExitControl}
          >
            <a.mesh
              {...spring}
              //{...bind()}
              onPointerEnter={onMouseEnterBall}
              onPointerLeave={onMouseExitBall}
            >
              <sphereBufferGeometry
                attach={"geometry"}
                args={[1, 100, 100]}
              />
              <meshPhysicalMaterial
                attach={"material"}
                map={texture}
              />
            </a.mesh>
          </TransformControls>
      }
    </>
  )
}

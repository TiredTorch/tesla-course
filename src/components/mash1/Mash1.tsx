import { FC, useRef } from "react"
import { DoubleSide, Mesh, TextureLoader } from "three"
import { ThreeEvent, useFrame, useLoader } from "@react-three/fiber"
import { Mesh1Types } from "./Mash1.types"
import wood from "/../../assets/wood.jpg"

export const Mash1: FC<Mesh1Types> = ({
  config,
  setOrbitActive
}) => {

  const ref = useRef<Mesh>(null)
  const texture = useLoader(TextureLoader, wood)

  
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y += .01;
      ref.current.position.y += (Math.cos(clock.elapsedTime * 3) / 200)
    }
  })

  const onMouseEnter = (e: ThreeEvent<PointerEvent>) => {
    setOrbitActive(false);
    e.object.scale.x = 1.5;
    e.object.scale.y = 1.5;
    e.object.scale.z = 1.5;
  }
  const onMouseExit = (e: ThreeEvent<PointerEvent>) => {
    setOrbitActive(true);
    e.object.scale.x = 1;
    e.object.scale.y = 1;
    e.object.scale.z = 1;
  }

  return (
    <mesh
      ref={ref}
      {...config}
      castShadow
      onPointerEnter={onMouseEnter}
      onPointerLeave={onMouseExit}
      // receiveShadow
    >
      <boxBufferGeometry args={[.3, .3, .3]} />
      <meshPhysicalMaterial
        map={texture}
        // //1
        // color={"white"}
        // side={DoubleSide}

        // //2
        // // fog={false}
        // transparent
        // // opacity={.3}
        // // wireframe 
        // // metalness={.4}
        // roughness={0}

        // //3
        // clearcoat={1}
        // transmission={.8} // has 2 be transparent
        // reflectivity={1}
      />
    </mesh>
  )
}

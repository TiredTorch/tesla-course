import { FC, useRef } from "react"
import { DoubleSide, Mesh, TextureLoader } from "three"
import { useFrame, useLoader } from "@react-three/fiber"
import { Mesh1Types } from "./Mash1.types"
import wood from "../../assets/wood.jpg"

export const Mash1: FC<Mesh1Types> = ({
  config
}) => {

  const ref = useRef<Mesh>(null)

  const texture = useLoader(TextureLoader, wood)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += .01;
    }
  })

  return (
    <mesh
      ref={ref}
      {...config}
      castShadow
      // receiveShadow
    >
      <sphereBufferGeometry args={[.3, 200, 200]} />
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

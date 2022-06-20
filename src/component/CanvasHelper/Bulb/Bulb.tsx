import { FC, useEffect, useRef } from "react"

export const Bulb: FC<any> = ({
  position,
  setLights,
  lights
}) => {

  const ref = useRef<any>(null)

  useEffect(() => {
    if (ref.current.current) {
      console.log(ref.current)
      setLights([
        ...lights, ref
      ])
      console.log(lights)
    }

  }, [ref])


  return (
    <mesh
      ref={ref}
      position={position}
    >
      <sphereBufferGeometry args={[.3, 100, 100]} />
      <meshPhongMaterial emissive={"yellow"} />
      <pointLight
        intensity={.4}
        castShadow
        shadow-mapSize-height={2 ** 9}
        shadow-mapSize-width={2 ** 9}
      />
    </mesh>
  )
}

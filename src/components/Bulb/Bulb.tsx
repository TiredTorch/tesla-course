import React from 'react'

export const Bulb = () => {
  return (
    <mesh
      position={[0, 1.5, 0]}
    >
      <sphereBufferGeometry args={[.2, 100, 100, 100]}/>
      <meshPhongMaterial emissive={"yellow"}/>
      <pointLight 
          intensity={1}
          castShadow
          />
    </mesh>
  )
}

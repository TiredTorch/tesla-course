
export const Floor = () => {
  return (
    <mesh
      position={[0, -.1, 0]}
      receiveShadow
    >
      <boxBufferGeometry args={[5, .1, 5]}/>
      <meshPhysicalMaterial/>
    </mesh>
  )
}

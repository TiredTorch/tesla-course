
export const Floor = () => {
  return (
    <mesh
      position={[2, -.1, 2]}
    >
      <boxBufferGeometry
        args={[10, .1, 20]}
      />
      <meshPhysicalMaterial
        color={"white"}
      />  
    </mesh>
  )
}

import { useSphere } from '@react-three/cannon'
import { useFrame, useLoader } from '@react-three/fiber'
import React, { FC } from 'react'
import { AnimationMixer } from 'three'
import { GLTFLoader } from 'three-stdlib'

export const Soul: FC<any> = ({
  position,
  rotation
}) => {
  const model: any = useLoader(GLTFLoader, "/assets/fish/scene.gltf")

  let mixer: any;

  if (model.animations.length > 0) {
    console.log(model)
    mixer = new AnimationMixer(model.scene);
    model.animations.forEach((clip: any) => {
      mixer.clipAction(clip).play();
    })
  }

  useFrame((state, delta) => {
    mixer?.update(delta)
  })

  return (
    <group
    >
      <primitive
        rec
        object={model.scene}
        scale={[6, 6, 6]}
        position={position}
        rotation={rotation}
      />
    </group>
  )
}

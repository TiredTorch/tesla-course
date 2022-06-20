import { FC } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { AnimationClip, AnimationMixer } from 'three'
import { GLTF, GLTFLoader } from 'three-stdlib'
import { SoulProps } from './Soul.types'

export const Soul: FC<SoulProps> = ({
  position,
  rotation
}) => {
  const model: GLTF = useLoader(GLTFLoader, "assets/fish/scene.gltf")

  let mixer: AnimationMixer;

  if (model.animations.length > 0) {
    mixer = new AnimationMixer(model.scene);
    model.animations.forEach((clip: AnimationClip) => {
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

useGLTF.preload("assets/fish/scene.gltf")
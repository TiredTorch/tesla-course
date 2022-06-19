import { Box, Button } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { Vector3 } from 'three'
import { canvasState } from '../../state/state'
import { cameraButtonsStyles } from './CameraButtons.styles'

export const CameraButtons = () => {

  const [currentPos, setCurrentPos] = useState(0)

  const cameraPositions = useMemo(() => {
    return [
      {
        cameraPos: new Vector3(4, 1, 5.5),
        targetPos: new Vector3(0, 0, 8), 
        meshName: "Object_71"
      },
      {
        cameraPos: new Vector3(4, 2, -3),
        targetPos: new Vector3(0, 0, 0), 
        meshName: "LowPoly_Material_0"
      },
    ]
  }, [])

  useEffect(() => {
    canvasState.cameraPos = cameraPositions[currentPos].cameraPos
    canvasState.targetPos = cameraPositions[currentPos].targetPos
    canvasState.activeMashName = cameraPositions[currentPos].meshName
  }, [currentPos, cameraPositions])


  const handlePrevState = () => {
    if (currentPos !== 0) {
      setCurrentPos(currentPos - 1);
    }
  }
  const handleNextState = () => {
    if (currentPos !== (cameraPositions.length - 1)) {
      setCurrentPos(currentPos + 1);
    }
  }

  return (
    <Box
      component={"div"}
      sx={cameraButtonsStyles.root}
    >
      <Button
        sx={cameraButtonsStyles.button}
        onClick={handlePrevState}
      >
        Prev
      </Button>
      <Button
        sx={cameraButtonsStyles.button}
        onClick={handleNextState}
      >
        Next
      </Button>
    </Box>
  )
}

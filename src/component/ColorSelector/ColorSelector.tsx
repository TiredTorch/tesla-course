import { Box } from '@mui/material'
import React from 'react'
import { Color } from 'three'
import { canvasState } from '../../state/state'
import { colorSelectorStyles } from './ColorSelector.styles'

export const ColorSelector = () => {

  const colors = [
    "red", "blue", "green", "white", "yellow", "maroon"
  ]

  const handleSelectColor = (color: string) => {
    console.log(color)
    console.log(canvasState.activeMash.material)
    canvasState.activeMash.material.color = new Color(color)
  }

  return (
    <Box
      component={"div"}
      sx={colorSelectorStyles.root}
    >
      {
        colors.map((item) => (
          <Box
            component={"div"}
            key={item}
            sx={{
              ...colorSelectorStyles.item,
              background: item
            }}
            onClick={() => handleSelectColor(item)}
          />
        ))
      }
    </Box>
  )
}

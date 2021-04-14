import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import './ColorsBlock.css';
import Zoom from 'react-reveal/Zoom';

function Color(props) {
  return (
    <Grid
      item
      className={`colors_info_block ${props.color}_color`}
      xs={4}
    >
      <Box className={`${props.color}_color-block color_block`}/>
      <Box className="color_block-info">
        <p className="color_block-name">{props.colorName}</p>
        <p className="color_block-hex">{props.hex}</p>
      </Box>
    </Grid>
  )
}

export default function ColorsBlock(props) {
  return (
    <Box className="colors_block">
      <h3 className="colors_block-title">
        {props.title.colorsTitle}
      </h3>
      <Zoom>
        <Grid
          container
          className="colors_block-info colors_info_block"
        >
          {props.color.map((currColor) =>
            <Color
              color={currColor.id}
              colorName={currColor.name}
              hex={currColor.hex}
              key={currColor.id}/>
          )}
        </Grid>
      </Zoom>
    </Box>
  )
}

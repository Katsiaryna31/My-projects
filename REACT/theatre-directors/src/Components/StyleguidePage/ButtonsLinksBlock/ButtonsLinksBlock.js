import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import './ButtonsLinksBlock.css'
import Zoom from 'react-reveal/Zoom';

function ButtonLink(props) {
  return (
    <Grid
      item
      className={`btn_block-${props.name}_btn`}
      xs={props.size}
    >
      {props.title.buttonsLinksName}
      <span className={`btn_block-${props.name}_btn-arrow btn-arrow`}>
        →
      </span>
    </Grid>
  )
}

export default function ButtonsLinksBlock(props) {
  return (
    <Box className="buttons_links_block">
      <h3 className="buttons_links_block-title">
        {props.title.buttonsLinksTitle}
      </h3>
      <Zoom>
        <Grid
          container
          className="buttons_links_block-btn btn_block"
        >
          <ButtonLink size={2} title={props.title} name="small"/>
          <ButtonLink size={4} title={props.title} name="medium"/>
          <ButtonLink size={4} title={props.title} name="large"/>
        </Grid>
      </Zoom>
    </Box>
  )
}

import React from 'react';
import Grid from '@material-ui/core/Grid';
import './TimeBlock.css';

export default function TimeBlock(props) {
  return (
    <Grid
      item
      className="time_block-time"
      xs={6}
      key={props.unique}
    >
      {props.time}
    </Grid>
  )
}

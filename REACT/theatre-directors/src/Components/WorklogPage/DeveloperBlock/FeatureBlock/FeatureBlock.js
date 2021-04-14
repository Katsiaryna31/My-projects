import React from 'react';
import Grid from '@material-ui/core/Grid';
import './FeatureBlock.css';

export default function FeatureBlock(props) {
  return (
    <Grid
      item
      className="feature_block-feature"
      xs={6}
      key={props.feature}
    >
      {props.feature}
    </Grid>
  )
}

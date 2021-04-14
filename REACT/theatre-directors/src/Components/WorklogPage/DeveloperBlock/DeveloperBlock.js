import React from 'react';
import FeatureBlock from "./FeatureBlock/FeatureBlock";
import TimeBlock from "./TimeBlock/TimeBlock";
import Grid from '@material-ui/core/Grid';
import './DeveloperBlock.css';


export default function Developer(props) {
  const developer = props.developersData;
  const navigation = props.nav;
  const doneWork = props.devDone;
  return (
    <div className="developer_block">
      <div
        className="developer_block-image_name"
        style={{ background:`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${developer.image})`}}
        key={developer.id}
      >
        <h2 className="developer_block-name">
          {developer.name}
        </h2>
      </div>
      <Grid
        container
        className="developer_block-time_feature time_feature_block"
      >
        <Grid item className="time_block-title" xs={6}>{navigation.time}</Grid>
        <Grid item className="feature_block-title" xs={6}>{navigation.feature}</Grid>
        <TimeBlock time={doneWork.time[0] || ''} unique={'first'}/>
        <FeatureBlock feature={doneWork.tasks[0] || ''}/>
        <TimeBlock time={doneWork.time[1] || ''} unique={'second'}/>
        <FeatureBlock feature={doneWork.tasks[1] || ''}/>
        <TimeBlock time={doneWork.time[2] || ''} unique={'third'}/>
        <FeatureBlock feature={doneWork.tasks[2] || ''}/>
        <TimeBlock time={doneWork.time[3] || ''} unique={'fourth'}/>
        <FeatureBlock feature={doneWork.tasks[3] || ''}/>
        <TimeBlock time={doneWork.time[4] || ''} unique={'fifth'}/>
        <FeatureBlock feature={doneWork.tasks[4] || ''}/>
        <TimeBlock time={doneWork.time[5] || ''} unique={'sixth'}/>
        <FeatureBlock feature={doneWork.tasks[5] || ''}/>
      </Grid>
    </div>
  );
}

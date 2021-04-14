import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import './TasksBlock.css';
import Zoom from 'react-reveal/Zoom';
import ScrollAnimation from 'react-animate-on-scroll';
let keyElem = '';

export default function TasksBlock(props) {
  return (
    <Box className="self_evaluation_block">
      <h3 className="self_evaluation_block-title">{props.task.tasksTitle}</h3>
      {props.task.tasks.map((elem, index) => {
        keyElem = elem;
        if (index < 17) {
          return (
            <Zoom key={`${elem}1`}>
              <div className="self_evaluation_block-task" key={elem}>
                <Checkbox defaultChecked />
                <span  className="self_evaluation_block-task-about">
                  {elem}
                </span>
              </div>
            </Zoom>
          )
        }
        return (
          <Zoom key={`${elem}2`}>
            <div className="self_evaluation_block-task" key={elem}>
              <Checkbox disabled />
              <span  className="self_evaluation_block-task-about">
                {elem}
              </span>
            </div>
          </Zoom>
        )
      })}
      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut' key={`${keyElem}3`}>
        <h3 className="self_evaluation_block-title">{props.task.selfScore}</h3>
      </ScrollAnimation>
    </Box>
  )
}

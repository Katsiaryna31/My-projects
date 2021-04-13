import React from 'react';
import Options from './optionsList';
import Description from './description';


const Answer = ({level, taskBird, setRightAnswer, clickedId, setClickedId, setScore}) => {
    return (<div className="answer_wrapper">
        <Options level={level} taskBird={taskBird} setClickedId={setClickedId} setRightAnswer={setRightAnswer} setScore={setScore}/>
        <Description level={level} clickedId={clickedId}/>
    </div>
)};

export default Answer;

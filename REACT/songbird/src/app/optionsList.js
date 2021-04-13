import React from 'react';
import Sound from 'react-sound';
import birdsData from './birdsData';

const checkAnswer = (index, activeBird, taskBird, setClickedId, setRightAnswer, setScore) => {
    const clickedID = `radio${index}`;
    const clickedItem = document.getElementById(clickedID);
    setClickedId(index);
    if (activeBird === taskBird.name) {
        clickedItem.classList.add('options_item--right');
        setRightAnswer(true);
        const radioButtons = document.querySelectorAll('.options_input');
        radioButtons.forEach((button) => {
            button.setAttribute('disabled', 'disabled');
        })
    } else {
        clickedItem.classList.add('options_item--wrong');
        setScore(score => (score - 1));
    }
}

const createOptionsList = (level, taskBird, setClickedId, setRightAnswer, setScore) => {
    const levelData = birdsData[level];
    const optionsList = levelData.map((levelItem, index) =>
    <li className="options_item" key={index}>
        <label className="options_label" htmlFor={'radio' + index}>
            <input type="radio" id={'radio' + index} name='answer' className="options_input" onClick={() => checkAnswer(index, levelItem.name, taskBird, setClickedId, setRightAnswer, setScore)}></input>
        {levelItem.name}</label>
    </li>
);
    return optionsList;
}

const Options = ({level, taskBird, setClickedId, setRightAnswer, setScore}) => (
    <ul className="options_list">
        {createOptionsList(level, taskBird, setClickedId, setRightAnswer, setScore)}
    </ul>
);

export default Options;
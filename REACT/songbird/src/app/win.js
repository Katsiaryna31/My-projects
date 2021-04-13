import React from 'react';

const Win = ({ score }) => {
    return (<div>
        {score < 30 && <div className='win_wrapper'>
            <h1 className='win_header'>Well done!</h1>
            <p className='win_text'>You finish game with the score {score}</p>
            <iframe title='Title' src="https://giphy.com/embed/peAFQfg7Ol6IE" width="480" height="455" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        </div>}
        {score === 30 && <div className='win_wrapper'>
        <h1 className='win_header'>Condratulations!</h1>
            <p className='win_text'>You are absolute winner with max score {score}!</p>
            <iframe title='Title' src="https://giphy.com/embed/26tOZ42Mg6pbTUPHW" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            <a class="button-try" href="index.html">Try again</a>
        </div>}
    </div>)
}

export default Win;
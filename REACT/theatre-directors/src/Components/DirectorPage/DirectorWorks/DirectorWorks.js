import React from 'react';

import './DirectorWorks.css';

function DirectorWorks(props) {
    const { data, titles } = props;
    return (
        <div className="director-works">
            <div className="dates-container">
                <p className="dates-container-title">{titles.dateOfCreation}</p>
                <DatesList project={data.project} />
            </div>
            <div className="works-container">
                <p className="works-container-title">{titles.work}</p>
                <WorksList project={data.project} />
            </div>

        </div>
    );
}

function DatesList(props) {
    const { project } = props;
    const listItems = project.map((item, index) =>
        <li className="dates-list-item" key={index}>{item.date}</li>
    );
    return (
        <ul className="dates-list">
            {listItems}
        </ul>
    );
  }

function WorksList(props) {
    const { project } = props;
    const listItems = project.map((item, index) =>
        <li className="works-list-item" key={index}>{item.text}</li>
    );
    return (
        <ul className="works-list">
            {listItems}
        </ul>
    );
}

export default DirectorWorks;
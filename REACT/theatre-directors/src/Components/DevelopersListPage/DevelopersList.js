import React, { PureComponent } from 'react';
import Developer from './Developer';
import './DevelopersList.css';
import Zoom from 'react-reveal/Zoom';

export default class DevelopersList extends PureComponent {
  render() {
    const {
      developers
    } = this.props;

    return <Zoom><div className="developers-list">
        {developers.map(developerData => {
          return (
            <Developer
              key={developerData.id}
              developerData={developerData}
            />
          );
        })}
      </div></Zoom>;
  }
}

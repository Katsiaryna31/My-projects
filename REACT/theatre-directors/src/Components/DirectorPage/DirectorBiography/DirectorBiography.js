import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './DirectorBiography.css';

function DirectorBiography(props) {
    const { data, titles } = props;
    const { timeline } = data;
    return (
        <div className="director-biography">
            <p className="timeline-title">{titles.timeline}</p>
            <VerticalTimeline>
            {timeline.map((item, index) => {
          return (
                <VerticalTimelineElement
                    key={index}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'inherit', border: '2px solid #F54D1C' }}
                    contentArrowStyle={{ borderRight: '15px solid  #F54D1C' }}
                    iconStyle={{ display: 'none' }}>
                    <h3 className="vertical-timeline-element-title">{item.date}</h3>
                    <p className="vertical-timeline-text">
                        {item.text}
                    </p>
                </VerticalTimelineElement>
          );
        })}
        </VerticalTimeline> 
         </div>
    );
}

export default DirectorBiography;
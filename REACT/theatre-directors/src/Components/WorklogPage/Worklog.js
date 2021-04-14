import React from 'react';
import Developer from "./DeveloperBlock/DeveloperBlock";
import './Worklog.css';
import TasksBlock from './TasksBlock/TasksBlock';
import Zoom from 'react-reveal/Zoom';
import ScrollAnimation from 'react-animate-on-scroll';
import ProblemsBlock from './ProblemsBlock/ProblemsBlock';


export default class Worklog extends React.Component {
  render() {
    const developers = this.props.developers;
    const tasks = this.props.tasks;
    const navigation = this.props.nav;
    const doneWork = this.props.doneWork;
    return (
     <div className="worklog">
       <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>

         {developers.map((developer,index) =>
           <Zoom key={developer.id}>
             <Developer
               developersData={developer}
               key={developer.name}
               nav={navigation}
               devDone={doneWork[index]}
             />
           </Zoom>)
         }
         <TasksBlock task={tasks}/>
         <ProblemsBlock
           task={tasks}
           nav={navigation}
         />
       </ScrollAnimation>
     </div>
    );
  }
}

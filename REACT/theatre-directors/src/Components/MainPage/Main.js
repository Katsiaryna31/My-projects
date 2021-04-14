import React from 'react';
import './Main.css';
import introductionImage from '../../Assets/Images/Introduction.jpg';
import bernardShowImage from '../../Assets/Images/GeorgeBernardShaw.jpg';
import jarkoPetanImage from '../../Assets/Images/JarkoPetan.jpg';
import theatreImage from '../../Assets/Images/Theatre.jpg';
import Zoom from 'react-reveal/Zoom';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


function changeLink() {
  const columnOne = Array.from(document.body.querySelector('.column-1').children);
  const parent = [...columnOne];
  parent[0].classList.remove("active");
  parent[1].classList.add("active");
}

function DirectorOfDay(props) {
    const currentDay = new Date();
    const weekDay = currentDay.getDay();
    const header = props.data.directorOfTheDay;
    const directorName = props.data.directors[weekDay].name;
    const birthDate = props.data.directors[weekDay].born;
    const deadDate = props.data.directors[weekDay].deceased;
    const description = props.data.directors[weekDay].description;
    const image = props.data.directors[weekDay].image;
    return <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
      <div className="directorOfDay">
                <div className="directorOfDay-container">
                    <h4>{header}</h4>
                    <a href={`list/${weekDay}`} onClick={changeLink}>
                      <div className="directorOfDay-nameContainer">
                            <p className="directorDay-name">{directorName}</p>
                            <span>→</span>
                        </div>
                    </a>
                    <p className="directorDay-dates">{birthDate} - {deadDate}</p>
                    <p className="directorDay-description">{description}</p>
                </div>
                <img src={image} alt="Director of Day" width="236px" height="320px"></img>
            </div>
          </ScrollAnimation>
}

function Introduction(props) {
    const text = props.data.mainText;
    return <div className="introduction">
        <div className="introduction-text">{text}</div>
        <Zoom>
          <img src={introductionImage} alt="introductionImage" width='570' height='551'></img>
        </Zoom>
    </div>;
}

function Quotes(props) {
    const { firstQuote } = props.data;
    const { secondQuote } = props.data;
    return <ScrollAnimation animateIn='zoomIn' animateOut='zoomOut'><div className="quotes">
        <div className="firstQuote">
            <img src={bernardShowImage} alt="Bernard Show" width='160' height='160'></img>
            <blockquote className="quote-wrapper">
                <q>{secondQuote.text}</q>
                <p>{secondQuote.author}</p>
            </blockquote>
        </div>
        <div className="secondQuote">
            <img src={jarkoPetanImage} alt="Jarko Petan" width='160' height='160'></img>
            <blockquote className="quote-wrapper">
                <q>{firstQuote.text}</q>
                <p>{firstQuote.author}</p>
            </blockquote>
        </div>
    </div></ScrollAnimation>;
}

function History(props) {
    const text = props.data.addText;
    return <div className="history">
      <ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutLeft'>
        <img src={theatreImage} alt="theatre" width='673' height='794'></img>
      </ScrollAnimation>
      <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutRight'>
          <div className="history-text">{text}</div>
       </ScrollAnimation>
    </div>;
}


class MainPage extends React.Component {
    render() {
        const data = this.props.data;
        return <div className="main-page">
            <Introduction data={data} />
            <Quotes data={data} />
            <History data={data} />
            <DirectorOfDay data={data} />
        </div>
    }
}

export default MainPage;

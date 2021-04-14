import React from 'react';
import Box from '@material-ui/core/Box';
import './Styleguide.css';
import ColorsBlock from "./ColorsBlock/ColorsBlock";
import ButtonsLinksBlock from "./ButtonsLinksBlock/ButtonsLinksBlock";
import TextStylesBlock from "./TextStylesBlock/TextStylesBlock";


export default class Styleguide extends React.Component {
  render() {
    const colorsData = this.props.colorsData;
    const titles = this.props.navTitle;
    return (
     <Box className="styleguide">
       <ColorsBlock color={colorsData} title={titles}/>
       <ButtonsLinksBlock title={titles}/>
       <TextStylesBlock titles={titles}/>
     </Box>
    );
  }
}

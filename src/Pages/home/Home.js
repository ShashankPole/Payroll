import React from 'react';

import { Container, CardContent, Typography, CardMedia } from '@material-ui/core';
import {config1, config2, config3 } from "../../configurations/componentConfig"
import FooterComponent from '../../footer/FooterComponent';

const homeConfig = [config1, config2, config3];
function Home(props) {
  const { description,   layout,  imageStyle, imageDirection } = props;

  const containerStyle = {
    margin: "1px",
    // display 'flex',
    // flexDirection: layout.flexDirection || 'row',
    // justifyContent: layout.justifyContent || 'space-between',
    // alignItems: layout.alignItems || 'center',
  };

  const reversedImageStyle = {
    ...imageStyle,
    float: imageDirection === 'left' ? 'right' : 'left',
  };

  return (
    <>
    <Container >
      {homeConfig.map((config, index) => (
       <>
       <CardMedia key={index} component="img" src={config.imageUrl} alt="Component Image" style={config.imageStyle} /><div>
          <CardContent>
            <Typography variant="h6" style={config.titleStyle}>{config.title}</Typography>
            {config.description && <Typography variant="body2" style={config.descriptionStyle}>{config.description}</Typography>}
          </CardContent>
        </div></>
       ))}
      <FooterComponent />
    </Container>
    </>
  );
}

export default Home;

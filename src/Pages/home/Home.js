import React from 'react';
import FooterComponent from "../../footer/FooterComponent"
import { Container, CardContent, Typography, CardMedia } from '@material-ui/core';

function MyComponent(props) {
  const { title, description, showImage, imageUrl, layout, titleStyle, descriptionStyle, imageStyle, imageDirection } = props;

  const containerStyle = {
    margin: "40px",
    display: 'flex',
    flexDirection: layout.flexDirection || 'row',
    justifyContent: layout.justifyContent || 'space-between',
    alignItems: layout.alignItems || 'center',
  };

  const reversedImageStyle = {
    ...imageStyle,
    float: imageDirection === 'left' ? 'right' : 'left',
  };

  return (
    <Container style={containerStyle}>
      {showImage && <CardMedia component="img" src={imageUrl} alt="Component Image" style={reversedImageStyle} />}
      <div>
        <CardContent>
          <Typography variant="h6" style={titleStyle}>{title}</Typography>
          {description && <Typography variant="body2" style={descriptionStyle}>{description}</Typography>}
        </CardContent>
      </div>
      <FooterComponent />
    </Container>
  );
}

export default MyComponent;

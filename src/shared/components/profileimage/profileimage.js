import React from 'react';
import image from '../../../assets/img/clay-banks-31l-8hY1mt4-unsplash.jpg';

function ProfileImage({ ...props }) {
  return <img src={image} {...props} width={`${props.width}px`} />;
}

export default ProfileImage;

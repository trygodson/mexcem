import React from 'react';
import './attachment.scss';
import { Image } from 'react-bootstrap-icons';
import { colorScheme } from '../../../../default';

const customLinkStyle = {
  color: colorScheme.black,
  textDecoration: 'none',
};

function Attachment() {
  return (
    <div className="attachment">
      <Image />
      <span>img.jpg</span>
      <a href="" style={customLinkStyle}>
        View
      </a>
    </div>
  );
}

export default Attachment;

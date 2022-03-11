import React from 'react';
import Card from '../card/card';
import PageTitle from '../pagetitle/pagetitle';
import { colorScheme } from '../../../default';
import ProfileImage from '../profileimage/profileimage';
import Height from '../height/height';
import CustomText from '../customtext/customtext';
import { Star, StarFill, ChatTextFill } from 'react-bootstrap-icons';
import UserCard from '../smallcards/usercard/usercard';
import Ratings from '../ratings/ratings';

const customIconStyle = {
  marginBottom: '-2px',
  marginRight: '1.3px',
};

const customGroupStlyle = {
  color: colorScheme.success,
};

function UserDetails() {
  return (
    <div className="row">
      <div className=" col-xl-4 col-lg-4">
        <ProfileImage width="100%" />
      </div>
      <div className=" col-xl-4 col-lg-4">
        <h3 style={{ fontWeight: '500' }}>Stephen Jackson</h3>
        <Height val={5} />
        <CustomText type="p" size={17}>
          Full name
        </CustomText>
        <Height val={13.5} />
        <Ratings val={4} />
        <Height val={5} />
        <CustomText type="p" size={17}>
          View review
        </CustomText>
        <Height val={33.6} />
        <span style={customGroupStlyle}>
          <CustomText type="p" size={16.7}>
            <ChatTextFill size={20} style={customIconStyle} />{' '}
            <span style={{ marginLeft: '2.5px' }}>Send message</span>
          </CustomText>
        </span>
      </div>
      <div className=" col-xl-4 col-lg-4">
        <CustomText type="b" size={17}>
          +1 45256464453
        </CustomText>
        <CustomText type="p" size={17}>
          Phone
        </CustomText>
        <Height val={15} />
        <CustomText type="b" size={17}>
          sj@auxcar.co
        </CustomText>
        <CustomText type="p" size={17}>
          Email
        </CustomText>
        <Height val={15} />
        <CustomText type="b" size={17}>
          10/05/2021 05:15PM
        </CustomText>
        <CustomText type="p" size={17}>
          Date
        </CustomText>
      </div>
    </div>
  );
}

export default UserDetails;

import React from 'react';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { red, green } from '@mui/material/colors';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const CustomMaterialSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    color: `${red[700]}`,
    '&:hover': {
      backgroundColor: `${alpha(red[700], theme.palette.action.hoverOpacity)}`,
    },
  },
  '& .MuiSwitch-switchBase + .MuiSwitch-track': {
    backgroundColor: `${red[700]} !important`,
  },
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: `${green[600]} !important`,
    '&:hover': {
      backgroundColor: `${alpha(green[600], theme.palette.action.hoverOpacity)}`,
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: `${green[600]} !important`,
  },
}));

function CustomSwitch({ ...props }) {
  return <CustomMaterialSwitch {...label} {...props} />;
}

export default CustomSwitch;

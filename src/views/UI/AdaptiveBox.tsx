import { styled } from '@mui/material/styles';
import { observer } from 'mobx-react';

type AdaptiveBoxType = {
  isMobile: boolean,
  gap?: number,
};

const AdaptiveBox = styled('div')<AdaptiveBoxType>(({ isMobile, gap }) => ({
  display: 'flex',
  flexDirection: isMobile ? 'column-reverse' : 'row',
  alignItems: 'center',
  gap: `${gap}px`,
  justifyContent: 'center',
}));

export default observer(AdaptiveBox);

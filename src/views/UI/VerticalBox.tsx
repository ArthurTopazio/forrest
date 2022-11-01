import { styled } from '@mui/material/styles';

type VerticalBoxType = {
  gap?: number,
};

const VerticalBox = styled('div')<VerticalBoxType>(({ gap }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: `${gap}px`,
  justifyContent: 'center',
}));

export default VerticalBox;

import { styled } from '@mui/material/styles';

type HorizontalBoxType = {
  gap?: number,
};

const HorizontalBox = styled('div')<HorizontalBoxType>(({ gap }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: `${gap}px`,
  justifyContent: 'center',
}));

export default HorizontalBox;

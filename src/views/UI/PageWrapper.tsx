import { styled } from '@mui/material/styles';

const PageWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  '&::-webkit-scrollbar': {
    width: '4px',
    backgroundColor: '#F5F5F5',
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
    backgroundColor: theme.palette.primary.light,
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.dark,
    borderRadius: '7px',
  },
}));

export default PageWrapper;

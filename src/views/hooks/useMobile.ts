import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type UseMobileProps = 'sm' | 'md';
const useMobile = (breakPoint: UseMobileProps) => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(breakPoint));
};

export default useMobile;

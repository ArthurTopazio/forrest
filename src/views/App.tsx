import React, { HTMLAttributes, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { observer } from 'mobx-react-lite';
import store from 'index';
import useMobile from 'views/hooks/useMobile';
import { HBox } from '@simosol/boxes';
import Box from '@mui/material/Box';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import AppRouter from './components/AppRouter';
import ErrorSnackbar from './components/ErrorSnackbar';
import GlobalLoader from './components/GlobalLoader';
import SuccesSnackbar from './components/SuccesSnackbar';

const AppWrapper = styled(HBox)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  minHeight: '100vh',
}));
type ContentWrapperType = { isAuth: boolean } & HTMLAttributes<HTMLDivElement>;
const ContentWrapper = styled(
  ({ isAuth, ...otherProps }: ContentWrapperType) => <div {...otherProps} />,
)(({ theme, isAuth }) => ({
  backgroundColor: isAuth ? theme.palette.primary.light : theme.palette.primary.dark,
  minHeight: 'calc(100vh - 75px)',
  position: 'relative',
}));

const App = () => {
  const { init } = store;
  const { isAuth } = store.user;
  useEffect(() => {
    init();
  }, []);
  const isMobile = useMobile('md');
  console.warn('импорты svg');
  console.warn('рефакторинг моделей - private data set/get');

  return (
    <AppWrapper>
      {isAuth && <NavBar opened={!isMobile} />}
      <Box sx={{ width: '100%' }}>
        <Header />
        <ContentWrapper isAuth={isAuth}>
          {isAuth && <AppRouter />}
          <ErrorSnackbar />
          <SuccesSnackbar />
          <GlobalLoader />
        </ContentWrapper>
      </Box>
    </AppWrapper>
  );
};

export default observer(App);

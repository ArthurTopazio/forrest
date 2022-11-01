import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import '@simosol/boxes/lib/boxes.css';
import { HBox } from '@simosol/boxes';
import { observer } from 'mobx-react-lite';
import vectorCollection from 'consts/vectors';
import store from 'index';
import useMobile from 'views/hooks/useMobile';
import StyledImg from 'views/UI/StyledImg';
import LanguageSelect from './LanguageSelect';
import LoginForm from './LoginForm';
import BurgerMenu from '../NavBar/BurgerMenu';

type HeaderWrapperProps = {
  mobile: boolean
};
const HeaderWrapper = styled('div')<HeaderWrapperProps>(({ theme, mobile }) => ({
  padding: theme.spacing(0, mobile ? 2 : 7),
  height: '75px',
  backgroundColor: theme.palette.primary.light,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Header = () => {
  const [openForm, setOpenForm] = useState(false);
  const { setAuth, isAuth } = store.user;
  const { name, avatar } = store.user.user;
  const { router } = store;
  const isMobile = useMobile('md');
  const handleClickLogin = () => { setOpenForm(true); };
  const handleClickLogout = () => {
    setAuth(false);
    router.page = { p: '', p1: '' }; // ux update
  };

  return (
    <HeaderWrapper mobile={isMobile}>
      <div>
        {isAuth
          ? <div />
          : (
            <HBox gap={4} align="center">
              <StyledImg src={vectorCollection.tree} alt="forrest" width="70px" />
              {!isMobile && <Typography variant="h5" fontWeight={800}>FORREST</Typography>}
            </HBox>
          )}
        {isAuth && isMobile && <BurgerMenu />}
      </div>
      <HBox gap={16} align="center">
        <LanguageSelect />
        {isAuth
          ? (
            <>
              <Avatar alt={name} src={avatar} sx={{ mr: 1 }} />
              <Button onClick={handleClickLogout} endIcon={<LogoutRoundedIcon />}>Logout</Button>
            </>
          )
          : <Button onClick={handleClickLogin} endIcon={<LoginRoundedIcon />}>Login</Button>}
      </HBox>
      <LoginForm isOpen={openForm} handleClose={() => setOpenForm(false)} />
    </HeaderWrapper>
  );
};

export default observer(Header);

import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import '@simosol/boxes/lib/boxes.css';
import { VBox } from '@simosol/boxes';
import Typography from '@mui/material/Typography';
import NavBarButtonsData from 'consts/NavBarButtonsData';
import NavBarBtn from './NavBarBtn';

type NavBarWrapperType = {
  opened: boolean
};
const NavBarWrapper = styled('div')<NavBarWrapperType>(({ theme, opened }) => ({
  width: opened ? theme.spacing(38) : 0,
  minHeight: '100vh',
  backgroundColor: theme.palette.primary.dark,
  overflow: 'hidden',
  transition: '.3s ease',
}));
const ButtonsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '64px',
  width: '100%',
});
const TypographyLabel = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  margin: '60px auto',
  color: theme.palette.primary.main,
}));

interface NavBarTPD {
  opened: boolean,
  btnCallback?: () => void
}

const NavBar: FC<NavBarTPD> = ({ opened, btnCallback }) => (
  <NavBarWrapper opened={opened}>
    <VBox align="center">
      <TypographyLabel variant="h5">FORREST-APP</TypographyLabel>
      <ButtonsContainer>
        {NavBarButtonsData.map((item) => (
          <NavBarBtn
            icon={item.icon}
            name={item.name}
            path={item.path}
            key={item.name}
            callback={btnCallback}
          />
        ))}
      </ButtonsContainer>
    </VBox>
  </NavBarWrapper>
);

export default observer(NavBar);

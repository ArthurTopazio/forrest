import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { styled } from '@mui/material/styles';
import NavBar from './NavBar';

const BurgerNavWrapper = styled('div')(({ theme }) => ({
  width: theme.spacing(38),
  minHeight: '100vh',
  backgroundColor: theme.palette.primary.light,
}));

const BurgerMenu = () => {
  const [opened, setOpened] = useState(false);
  const modalClose = () => setOpened(false);

  return (
    <>
      <IconButton onClick={() => setOpened(true)}>
        <MenuOpenIcon color="primary" sx={{ fontSize: 40 }} />
      </IconButton>
      <Modal open={opened} onClose={modalClose}>
        <BurgerNavWrapper>
          <NavBar opened={opened} btnCallback={modalClose} />
        </BurgerNavWrapper>
      </Modal>
    </>
  );
};

export default BurgerMenu;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import { observer } from 'mobx-react';
import Popover from '@mui/material/Popover';
import Tooltip from '@mui/material/Tooltip';
import { PoligonType } from 'models/state/store/StandStore';
import store from 'index';
import { PathsApp } from 'consts/NavBarButtonsData';
import StandOptions from './StandOptions';

const StandPanelWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

interface StandPanelTPD {
  id: number | string
  square?: number
  description?: string
  deleteStand: (id: number | string | undefined) => Promise<void>
  poligon: PoligonType
}

const StandPanel: FC<StandPanelTPD> = ({
  id, square, description, poligon, deleteStand,
}) => {
  const { router } = store;
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleNavigateToStand = () => {
    router.page = { p: PathsApp.stand, p1: String(id) };
  };
  const open = Boolean(anchorEl);

  return (
    <StandPanelWrapper>
      <Tooltip title="Edit stand">
        <Link onClick={handleNavigateToStand} underline="always" sx={{ cursor: 'pointer' }}>{id}</Link>
      </Tooltip>
      <div>
        {square}
        ha
      </div>
      <div>{description}</div>
      <>
        <Tooltip title="Stand options">
          <IconButton onClick={handleClick}>
            <MoreVertIcon color="primary" />
          </IconButton>
        </Tooltip>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <StandOptions
            closeCallback={handleClose}
            poligon={poligon}
            standId={id}
            deleteStand={deleteStand}
          />
        </Popover>
      </>
    </StandPanelWrapper>
  );
};

export default observer(StandPanel);

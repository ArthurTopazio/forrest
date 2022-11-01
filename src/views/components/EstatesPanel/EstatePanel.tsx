/* eslint-disable jsx-a11y/anchor-is-valid */
import { observer } from 'mobx-react';
import React, { FC, useState } from 'react';
import { styled } from '@mui/material/styles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Tooltip from '@mui/material/Tooltip';
import ForestIcon from '@mui/icons-material/Forest';
import HorizontalBox from 'views/UI/HorizontalBox';
import Link from '@mui/material/Link';
import VerticalBox from 'views/UI/VerticalBox';
import store from 'index';
import { HBox } from '@simosol/boxes';
import SubmitModal from 'views/UI/SubmitModal';
import { PathsApp } from 'consts/NavBarButtonsData';

const EstatePanelWrapper = styled(HBox)(({ theme }) => ({
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginRight: theme.spacing(1),
}));

interface EstatePanelTPD {
  estateId: number | string | undefined
  standsNumbers?: number
  totalSquare?: number
  createStand?: () => void
}

const EstatePanel: FC<EstatePanelTPD> = ({
  estateId,
  standsNumbers,
  totalSquare,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const { deleteEstate } = store.estates;
  const { router } = store;
  const handleDelete = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setOpenModal(true);
  };
  const handleAddStand = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    router.page = { p: PathsApp.forrest, p1: PathsApp.create_stand };
    localStorage.setItem('estateCreateStandId', estateId as string);
  };
  const handleNavigateToEstate = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    router.page = { p: PathsApp.estate, p1: estateId as string };
  };

  return (
    <EstatePanelWrapper>
      <HorizontalBox gap={8}>
        <ForestIcon color="primary" />
        <VerticalBox>
          <Tooltip title="Edit estate">
            <Link onClick={handleNavigateToEstate} underline="always">{estateId}</Link>
          </Tooltip>
          <div>{`${standsNumbers} stands ${totalSquare}ha`}</div>
        </VerticalBox>
      </HorizontalBox>
      <div>
        <Tooltip title="Create stand">
          <IconButton onClick={handleAddStand}>
            <AddCircleOutlineIcon color="primary" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete estate">
          <IconButton onClick={handleDelete}>
            <DeleteForeverOutlinedIcon color="primary" />
          </IconButton>
        </Tooltip>
      </div>
      <SubmitModal
        isOpen={openModal}
        handleClose={() => setOpenModal(false)}
        submitCallback={() => deleteEstate(estateId)}
        messageText={`Delete estate ${estateId}?`}
      />
    </EstatePanelWrapper>
  );
};

export default observer(EstatePanel);

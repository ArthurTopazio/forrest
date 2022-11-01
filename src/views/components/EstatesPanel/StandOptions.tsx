import React, { FC, useState } from 'react';
import VerticalBox from 'views/UI/VerticalBox';
import { Button } from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditIcon from '@mui/icons-material/Edit';
import MapIcon from '@mui/icons-material/Map';
import { observer } from 'mobx-react';
import store from 'index';
import { PoligonType } from 'models/state/store/StandStore';
import SubmitModal from 'views/UI/SubmitModal';
import { PathsApp } from 'consts/NavBarButtonsData';
import PolygonMap from '../PolygonMap';

interface StandOptionsTPD {
  closeCallback: () => void
  poligon: PoligonType
  standId: string | number
  deleteStand: (id: number | string | undefined) => Promise<void>
}

const StandOptions: FC<StandOptionsTPD> = ({
  closeCallback, poligon, standId, deleteStand,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [openPoligon, setOpenPoligon] = useState(false);
  const { router } = store;
  const handleEditStand = () => {
    closeCallback();
    router.page = { p: PathsApp.stand, p1: String(standId) };
  };
  const showOnMapHandleClick = () => {
    setOpenPoligon(true);
  };
  const handleDelete = () => {
    setOpenModal(true);
  };

  return (
    <VerticalBox sx={{ alignItems: 'flex-start' }}>
      <Button startIcon={<DeleteForeverOutlinedIcon />} onClick={handleDelete}>Delete stand</Button>
      <Button startIcon={<EditIcon />} onClick={handleEditStand}>Edit stand</Button>
      <Button
        startIcon={<MapIcon />}
        onClick={showOnMapHandleClick}
        disabled={!poligon.coordinates?.length}
      >
        Show on a map
      </Button>
      <SubmitModal
        isOpen={openModal}
        handleClose={() => setOpenModal(false)}
        submitCallback={() => deleteStand(standId)}
        messageText={`Delete stand ${standId}?`}
      />
      <PolygonMap
        isOpen={openPoligon}
        closeCallback={() => {
          setOpenPoligon(false);
          closeCallback();
        }}
        coordinates={poligon.coordinates}
        standId={standId}
      />
    </VerticalBox>
  );
};

export default observer(StandOptions);

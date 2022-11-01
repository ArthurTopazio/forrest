import React, { FC } from 'react';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { observer } from 'mobx-react-lite';
import HorizontalBox from './HorizontalBox';
import VerticalBox from './VerticalBox';

const SubmitBox = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  width: theme.spacing(30),
  height: theme.spacing(16),
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '10px',
  boxShadow: '0 0 20px black',
  padding: theme.spacing(2),
}));

type SubmitModalType = {
  isOpen: boolean,
  handleClose: () => void,
  submitCallback: () => void,
  messageText?: string,
};

const SubmitModal: FC<SubmitModalType> = ({
  isOpen, handleClose, messageText = 'Confirm operation?', submitCallback,
}) => {
  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    submitCallback();
    handleClose();
  };
  const handleAbort = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    handleClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
    >
      <SubmitBox>
        <VerticalBox sx={{ textAlign: 'center' }} gap={16}>
          <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>{messageText}</Typography>
          <HorizontalBox gap={8}>
            <Button
              variant="outlined"
              color="success"
              sx={{ width: 80, mb: 2 }}
              onClick={handleSubmit}
            >
              Yes
            </Button>
            <Button
              variant="outlined"
              color="error"
              sx={{ width: 80, mb: 2 }}
              onClick={handleAbort}
            >
              No
            </Button>
          </HorizontalBox>
        </VerticalBox>
      </SubmitBox>
    </Modal>
  );
};

export default observer(SubmitModal);

import React, { FC } from 'react';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import '@simosol/boxes/lib/boxes.css';
import { VBox } from '@simosol/boxes';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import useInput from 'views/hooks/useInput';
import { observer } from 'mobx-react-lite';
import store from 'index';
import useMobile from 'views/hooks/useMobile';

type FormBoxProps = {
  mobile: boolean
};
const FormBox = styled('div')<FormBoxProps>(({ theme, mobile }) => ({
  backgroundColor: theme.palette.primary.light,
  width: mobile ? '85%' : theme.spacing(50),
  height: theme.spacing(31),
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '10px',
  boxShadow: '0 0 20px black',
  padding: theme.spacing(2),
}));

interface LoginFormTPD {
  isOpen: boolean,
  handleClose: () => void,
}

const LoginForm: FC<LoginFormTPD> = ({ isOpen, handleClose }) => {
  const { login } = store.user;
  const isMobile = useMobile('sm');
  const username = useInput('');
  const password = useInput('');
  const handleSubmit = () => {
    login(username.value, password.value);
    username.cleanValue();
    password.cleanValue();
    handleClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
    >
      <FormBox mobile={isMobile}>
        <VBox align="center">
          <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>Please enter your password</Typography>
          <TextField
            value={username.value}
            onChange={username.onChange}
            label="Username"
            variant="outlined"
            sx={{ mb: 2, width: '100%' }}
          />
          <TextField
            value={password.value}
            onChange={password.onChange}
            type="password"
            label="Password"
            variant="outlined"
            sx={{ mb: 2, width: '100%' }}
          />
          <Button variant="contained" sx={{ width: 80, mb: 2 }} onClick={handleSubmit}>Login</Button>
        </VBox>
      </FormBox>
    </Modal>
  );
};

export default observer(LoginForm);

import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { observer } from 'mobx-react';
import store from 'index';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((
  props,
  ref,
) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

const SuccessSnackbar = () => {
  const { success, setSuccess } = store.application;
  const [open, setOpen] = React.useState(false);
  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccess(false);
    setOpen(false);
  };
  React.useEffect(() => {
    if (success !== false) {
      setOpen(true);
    }
  }, [success]);

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Operation is successfuly!
      </Alert>
    </Snackbar>
  );
};

export default observer(SuccessSnackbar);

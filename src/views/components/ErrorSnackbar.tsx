import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { observer } from 'mobx-react';
import store from 'index';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((
  props,
  ref,
) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

const ErrorSnackbar = () => {
  const { error, setError } = store.application;
  const [open, setOpen] = React.useState(false);
  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setError('');
    setOpen(false);
  };
  React.useEffect(() => {
    if (error !== '') {
      setOpen(true);
    }
  }, [error]);

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {error}
      </Alert>
    </Snackbar>
  );
};

export default observer(ErrorSnackbar);

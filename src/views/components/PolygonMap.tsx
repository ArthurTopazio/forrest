import React, { FC } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { observer } from 'mobx-react';
import Polygon from 'views/UI/Polygon';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';

const Transition = React.forwardRef((
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) => <Slide direction="up" ref={ref} {...props} />);

type PolygonMapType = {
  isOpen: boolean
  closeCallback: () => void
  coordinates: [number, number][] | undefined
  standId?: string | number
};

const PolygonMap: FC<PolygonMapType> = ({
  isOpen, closeCallback, coordinates, standId,
}) => (
  <Dialog
    fullScreen
    open={isOpen}
    onClose={closeCallback}
    TransitionComponent={Transition}
  >
    <AppBar sx={{ position: 'relative' }}>
      <Toolbar>
        <IconButton
          edge="end"
          color="inherit"
          onClick={closeCallback}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" sx={{ ml: 4 }}>{`Stand #${standId}`}</Typography>
      </Toolbar>
    </AppBar>
    {isOpen && <Polygon coordinates={coordinates} />}
  </Dialog>
);

export default observer(PolygonMap);

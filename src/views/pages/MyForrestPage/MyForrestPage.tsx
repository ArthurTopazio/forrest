import { Button } from '@mui/material';
import React from 'react';
import PageWrapper from 'views/UI/PageWrapper';
import { observer } from 'mobx-react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EstatesPanel from 'views/components/EstatesPanel/EstatesPanel';
import store from 'index';
import { PathsApp } from 'consts/NavBarButtonsData';

const MyForrestPage = () => {
  const { router } = store;
  const handleCreateEstate = () => {
    router.page = { p: PathsApp.forrest, p1: PathsApp.create_estate };
  };

  return (
    <PageWrapper sx={{ overflowY: 'scroll' }}>
      <Button
        sx={{ ml: 3 }}
        startIcon={<AddCircleOutlineIcon />}
        onClick={handleCreateEstate}
      >
        Create estate
      </Button>
      <EstatesPanel />
    </PageWrapper>
  );
};

export default observer(MyForrestPage);

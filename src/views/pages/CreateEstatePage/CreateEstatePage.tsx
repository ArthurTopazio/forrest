import React from 'react';
import PageWrapper from 'views/UI/PageWrapper';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import HorizontalBox from 'views/UI/HorizontalBox';
import { observer } from 'mobx-react';
import { Button } from '@mui/material';
import store from 'index';
import InputPrimary from 'views/UI/InputPrimary';
import useInput from 'views/hooks/useInput';
import VerticalBox from 'views/UI/VerticalBox';
import { PathsApp } from 'consts/NavBarButtonsData';

const CreateEstatePage = () => {
  const { addEstate } = store.estates;
  const { router } = store;
  const code = useInput('');
  const name = useInput('');
  const municipality = useInput('');
  const area = useInput('');
  const certification = useInput('');
  const clientName = useInput('');
  const handleFormSubmit = () => {
    addEstate();
    console.log(code.value, name.value, municipality.value, area.value, certification.value, clientName.value);
    router.page = { p: PathsApp.forrest, p1: '' };
  };
  const handleFormCancel = () => {
    router.page = { p: PathsApp.forrest, p1: '' };
  };

  return (
    <PageWrapper>
      <VerticalBox sx={{ m: 'auto', width: 350 }}>
        <InputPrimary label="CODE" value={code.value} onChange={code.onChange} />
        <InputPrimary label="NAME" value={name.value} onChange={name.onChange} />
        <InputPrimary label="MUNICIPALITY" value={municipality.value} onChange={municipality.onChange} />
        <InputPrimary label="AREA" value={area.value} onChange={area.onChange} />
        <InputPrimary label="CERTIFICATION" value={certification.value} onChange={certification.onChange} />
        <InputPrimary label="CLIENT NAME" value={clientName.value} onChange={clientName.onChange} />
      </VerticalBox>
      <HorizontalBox gap={16} sx={{ mt: 2 }}>
        <Button
          onClick={handleFormCancel}
          variant="contained"
          color="info"
          startIcon={<ArrowBackIosNewIcon />}
        >
          Back
        </Button>
        <Button onClick={handleFormSubmit} variant="contained">Create</Button>
      </HorizontalBox>
    </PageWrapper>
  );
};

export default observer(CreateEstatePage);

import React, { useState } from 'react';
import PageWrapper from 'views/UI/PageWrapper';
import HorizontalBox from 'views/UI/HorizontalBox';
import VerticalBox from 'views/UI/VerticalBox';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Button, Typography, TextField } from '@mui/material';
import store from 'index';
import { observer } from 'mobx-react';
import Accordion, { AccordionSummary, StandsContainer } from 'views/UI/AccordeonComponents';
import { PathsApp } from 'consts/NavBarButtonsData';

const CreateStandPage = () => {
  const { router } = store;
  const [opened, setIsopened] = useState(false);
  const handleFormSubmit = () => {
    const estateId: string | null = localStorage.getItem('estateCreateStandId');
    const estate = store.estates.estates.filter((item) => item.estateId === estateId);
    estate[0].createStand(); // with form data
    router.page = { p: PathsApp.forrest, p1: '' };
  };
  const handleFormCancel = () => {
    router.page = { p: PathsApp.forrest, p1: '' };
  };

  return (
    <PageWrapper sx={{ overflowY: 'scroll' }}>
      <VerticalBox>
        <Accordion sx={{ width: 'calc(100% - 3px)' }} expanded={opened} onChange={() => setIsopened(!opened)}>
          <AccordionSummary>
            <Typography>General information</Typography>
          </AccordionSummary>
          <StandsContainer>
            <TextField placeholder="Stand number" variant="filled" sx={{ width: '100%' }} />
            <TextField placeholder="Parcel number" variant="filled" sx={{ width: '100%' }} />
            <TextField placeholder="Main group" variant="filled" sx={{ width: '100%' }} />
            <TextField placeholder="Development class" variant="filled" sx={{ width: '100%' }} />
            <TextField placeholder="Accessibility classifer" variant="filled" sx={{ width: '100%' }} />
            <TextField placeholder="Fertifility classifer" variant="filled" sx={{ width: '100%' }} />
            <TextField placeholder="Soil type" variant="filled" sx={{ width: '100%' }} />
            <TextField placeholder="Stand quality" variant="filled" sx={{ width: '100%' }} />
            <TextField placeholder="Drainage state" variant="filled" sx={{ width: '100%' }} />
            <TextField placeholder="Ditching year" variant="filled" sx={{ width: '100%' }} />
            <TextField placeholder="Public text" variant="filled" sx={{ width: '100%' }} />
            <TextField placeholder="Geal text" variant="filled" sx={{ width: '100%' }} />
            <TextField placeholder="Own text" variant="filled" sx={{ width: '100%' }} />
          </StandsContainer>
        </Accordion>
        <Accordion sx={{ width: 'calc(100% - 3px)' }}>
          <AccordionSummary>
            <Typography>Tree data</Typography>
          </AccordionSummary>
          <StandsContainer>
            some inputs
          </StandsContainer>
        </Accordion>
        <Accordion sx={{ width: 'calc(100% - 3px)' }}>
          <AccordionSummary>
            <Typography>Restriction</Typography>
          </AccordionSummary>
          <StandsContainer>
            some inputs
          </StandsContainer>
        </Accordion>
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

export default observer(CreateStandPage);

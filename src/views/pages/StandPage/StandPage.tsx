import { Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import store from 'index';
import { observer } from 'mobx-react';
import React from 'react';
import PageWrapper from 'views/UI/PageWrapper';
import InputPrimary from 'views/UI/InputPrimary';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Polygon from 'views/UI/Polygon';
import Accordion, { AccordionSummary, StandsContainer } from 'views/UI/AccordeonComponents';
import HorizontalBox from 'views/UI/HorizontalBox';
import { PathsApp } from 'consts/NavBarButtonsData';
import AdaptiveBox from 'views/UI/AdaptiveBox';
import useMobile from 'views/hooks/useMobile';
import useInput from 'views/hooks/useInput';
import standCoordinatesById from 'utils/standCoordinatesById';

const StandMapWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '85%',
  height: theme.spacing(51),
  margin: 'auto',
  marginTop: theme.spacing(2),
}));

const StandPage = () => {
  const isMobile = useMobile('md');
  const { router } = store;
  const standId = router.page.p1;
  const handleNavigateBack = () => {
    router.page = { p: PathsApp.forrest, p1: '' };
  };
  const test = useInput(String(standId));
  const coordinates = standCoordinatesById(standId as string);

  return (
    <PageWrapper sx={{ overflowY: 'scroll' }}>
      <HorizontalBox sx={{ justifyContent: 'flex-start' }}>
        <Button
          sx={{ marginX: 1 }}
          onClick={handleNavigateBack}
          variant="contained"
          color="info"
          startIcon={<ArrowBackIosNewIcon />}
        >
          Back
        </Button>
        <Typography variant="h5">{`Stand ${standId}`}</Typography>
      </HorizontalBox>
      <AdaptiveBox isMobile={isMobile} gap={0} sx={{ marginX: 1, alignItems: isMobile ? 'center' : 'baseline' }}>
        <Accordion sx={{ width: isMobile ? 'calc(100% + 13px)' : 350, mt: 2 }}>
          <AccordionSummary>
            <Typography>General information</Typography>
          </AccordionSummary>
          <StandsContainer>
            <InputPrimary label="Stand number" value={test.value} onChange={test.onChange} />
            <InputPrimary label="Parcel number" value={test.value} onChange={test.onChange} />
            <InputPrimary label="Main group" value={test.value} onChange={test.onChange} />
            <InputPrimary label="Development class" value={test.value} onChange={test.onChange} />
            <InputPrimary label="Accessibility classifer" value={test.value} onChange={test.onChange} />
            <InputPrimary label="Fertifility classifer" value={test.value} onChange={test.onChange} />
            <InputPrimary label="Soil type" value={test.value} onChange={test.onChange} />
            <InputPrimary label="Stand quality" value={test.value} onChange={test.onChange} />
            <InputPrimary label="Drainage state" value={test.value} onChange={test.onChange} />
            <InputPrimary label="Ditching year" value={test.value} onChange={test.onChange} />
            <InputPrimary label="Public text" value={test.value} onChange={test.onChange} />
            <InputPrimary label="Geal text" value={test.value} onChange={test.onChange} />
            <InputPrimary label="Own text" value={test.value} onChange={test.onChange} />
          </StandsContainer>
        </Accordion>
        <StandMapWrapper>
          <Polygon coordinates={coordinates as [number, number][]} />
        </StandMapWrapper>
      </AdaptiveBox>
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
    </PageWrapper>
  );
};

export default observer(StandPage);

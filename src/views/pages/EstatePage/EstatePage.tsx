import { Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import store from 'index';
import { observer } from 'mobx-react';
import React from 'react';
import PageWrapper from 'views/UI/PageWrapper';
import InputPrimary from 'views/UI/InputPrimary';
import useInput from 'views/hooks/useInput';
import VerticalBox from 'views/UI/VerticalBox';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import HorizontalBox from 'views/UI/HorizontalBox';
import { PathsApp } from 'consts/NavBarButtonsData';
import { StandsContainer } from 'views/UI/AccordeonComponents';
import StandPanel from 'views/components/EstatesPanel/StandPanel';
import AdaptiveBox from 'views/UI/AdaptiveBox';
import useMobile from 'views/hooks/useMobile';
import EstatePolygons from 'views/UI/EstatePolygons';
import estateCoordinates from 'utils/estateCoordinates';

const EstateMapWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '85%',
  height: theme.spacing(51),
  margin: 'auto',
  marginTop: theme.spacing(2),
}));

const EstatePage = () => {
  const isMobile = useMobile('md');
  const { router } = store;
  const estateId = router.page.p1;
  const { totalSquare, stands, deleteStand } = store.estates.estates.filter((item) => item.estateId === estateId)[0];
  const code = useInput(estateId as string);
  const coordinates = estateCoordinates(stands);
  const name = useInput('test name');
  const municipality = useInput('test municipal');
  const area = useInput(String(totalSquare));
  const certification = useInput('No certification');
  const clientName = useInput('test client name');
  const handleNavigateBack = () => {
    router.page = { p: PathsApp.forrest, p1: '' };
  };

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
        <Typography variant="h5">{`Estate ${estateId}`}</Typography>
      </HorizontalBox>
      <AdaptiveBox isMobile={isMobile} gap={16} sx={{ marginX: 1 }}>
        <VerticalBox sx={{ m: 'auto', width: 350 }}>
          <InputPrimary label="CODE" value={code.value} onChange={code.onChange} />
          <InputPrimary label="NAME" value={name.value} onChange={name.onChange} />
          <InputPrimary label="MUNICIPALITY" value={municipality.value} onChange={municipality.onChange} />
          <InputPrimary label="AREA" value={area.value} onChange={area.onChange} />
          <InputPrimary label="CERTIFICATION" value={certification.value} onChange={certification.onChange} />
          <InputPrimary label="CLIENT NAME" value={clientName.value} onChange={clientName.onChange} />
        </VerticalBox>
        <EstateMapWrapper>
          <EstatePolygons coordinates={coordinates as [number, number][][]} />
        </EstateMapWrapper>
      </AdaptiveBox>
      <StandsContainer sx={{ mt: 2 }}>
        {stands.map((stand) => (
          <StandPanel
            id={stand.stand.id}
            description={stand.stand.description}
            square={stand.stand.square}
            poligon={stand.stand.poligon}
            key={stand.stand.id}
            deleteStand={deleteStand}
          />
        ))}
      </StandsContainer>
    </PageWrapper>
  );
};

export default observer(EstatePage);

import React from 'react';
import store from 'index';
import { observer } from 'mobx-react';
import Accordion, { AccordionSummary, StandsContainer } from 'views/UI/AccordeonComponents';
import EstatePanel from './EstatePanel';
import StandPanel from './StandPanel';

const EstatesPanel = () => {
  const { estates } = store.estates;

  return (
    <div>
      {estates.map((estate) => (
        <Accordion key={estate.estateId} expanded={estate.isOpened} onChange={estate.setIsOpened}>
          <AccordionSummary>
            <EstatePanel
              estateId={estate.estateId}
              standsNumbers={estate.stands.length}
              totalSquare={estate.totalSquare}
              createStand={estate.createStand}
            />
          </AccordionSummary>
          <StandsContainer>
            {estate.stands.map((stand) => (
              <StandPanel
                id={stand.stand.id}
                description={stand.stand.description}
                square={stand.stand.square}
                poligon={stand.stand.poligon}
                key={stand.stand.id}
                deleteStand={estate.deleteStand}
              />
            ))}
          </StandsContainer>
        </Accordion>
      ))}
    </div>
  );
};

export default observer(EstatesPanel);

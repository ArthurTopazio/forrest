import React from 'react';
import MapPage from 'views/pages/MapPage/MapPage';
import MyForrestPage from 'views/pages/MyForrestPage/MyForrestPage';
import AdminToolsPage from 'views/pages/AdminToolsPage/AdminToolsPage';
import { observer } from 'mobx-react-lite';
import store from 'index';
import CreateStandPage from 'views/pages/CreateStandPage/CreateStandPage';
import CreateEstatePage from 'views/pages/CreateEstatePage/CreateEstatePage';
import { PathsApp } from 'consts/NavBarButtonsData';
import EstatePage from 'views/pages/EstatePage/EstatePage';
import StandPage from 'views/pages/StandPage/StandPage';

const AppRouter = () => {
  const { router } = store;

  return (
    <>
      {router.page.p === PathsApp.map && <MapPage />}
      {router.page.p === PathsApp.tools && <AdminToolsPage />}
      {router.page.p === PathsApp.forrest && !router.page.p1 && <MyForrestPage />}
      {router.page.p === PathsApp.forrest && router.page.p1 === PathsApp.create_stand && <CreateStandPage />}
      {router.page.p === PathsApp.forrest && router.page.p1 === PathsApp.create_estate && <CreateEstatePage />}
      {router.page.p === PathsApp.estate && <EstatePage />}
      {router.page.p === PathsApp.stand && <StandPage />}
    </>
  );
};

export default observer(AppRouter);

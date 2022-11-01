import { observer } from 'mobx-react';
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as turf from '@turf/turf';
import PageWrapper from 'views/UI/PageWrapper';
import { polygonStyle } from 'consts/mockData/mockData';
import getAllStands from 'utils/getAllStands';

const MapPage = () => {
  const mapNode = useRef(null);

  useEffect(() => {
    const node = mapNode.current;
    if (typeof window === 'undefined' || node === null) return;
    const features = turf.featureCollection(getAllStands());
    const center = turf.center(features);
    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.REACT_APP_MAP_TOKEN,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center.geometry.coordinates as [number, number],
      zoom: 4,
    });
    mapboxMap.on('load', () => {
      mapboxMap.addSource('maine', {
        type: 'geojson',
        data: features,
      });
      mapboxMap.addLayer(polygonStyle);
    });

    // eslint-disable-next-line consistent-return
    return (): void => {
      mapboxMap.remove();
    };
  }, []);

  return (
    <PageWrapper ref={mapNode} />
  );
};

export default observer(MapPage);

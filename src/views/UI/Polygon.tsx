import { observer } from 'mobx-react';
import React, { useRef, useEffect, FC } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as turf from '@turf/turf';
import PageWrapper from 'views/UI/PageWrapper';
import { polygonStyle } from 'consts/mockData/mockData';

type PolygonType = {
  coordinates: [number, number][] | undefined
};

const Polygon: FC<PolygonType> = ({ coordinates }) => {
  const mapNode = useRef(null);

  useEffect(() => {
    const node = mapNode.current;
    if (typeof window === 'undefined' || node === null) return;

    const coordinatesPolygon = JSON.parse(JSON.stringify(coordinates));

    const polygon = turf.polygon([
      coordinatesPolygon,
    ]);
    const center = turf.centerOfMass(polygon);
    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.REACT_APP_MAP_TOKEN,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center.geometry.coordinates as [number, number],
      zoom: 5,
    });
    mapboxMap.on('load', () => {
      mapboxMap.addSource('maine', {
        type: 'geojson',
        data: polygon,
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

export default observer(Polygon);

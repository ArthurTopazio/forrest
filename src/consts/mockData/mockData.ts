// eslint-disable-next-line max-len
const mockTreePic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5_3vedH587TwRExjVBJottke8Dv_0AZXcg_0X6fVnOZspVxH0qEdXd5yJ52S_QZobe-0&usqp=CAU';
export const engFlag = 'https://cdn2.iconfinder.com/data/icons/european-flags-3/100/Britain-512.png';
export const finnFlag = 'https://cdn.countryflags.com/thumbs/finland/flag-3d-round-250.png';
export const polygonStyle: any = {
  id: 'maine',
  type: 'fill',
  source: 'maine',
  layout: {
    visibility: 'visible',
  },
  paint: {
    'fill-color': '#81c784',
    'fill-opacity': 0.6,
  },
};
export const polygonStyler = (idPolygon: string): any => ({
  id: idPolygon,
  type: 'fill',
  source: 'maine',
  layout: {},
  paint: {
    'fill-color': '#0080ff',
    'fill-opacity': 0.5,
  },
});
export const mockPolygonCoordinates = [
  [
    -67.13734,
    45.13745,
  ],
  [
    -66.96466,
    44.8097,
  ],
  [
    -68.03252,
    44.3252,
  ],
  [
    -69.06,
    43.98,
  ],
  [
    -70.11617,
    43.68405,
  ],
  [
    -70.64573,
    43.09008,
  ],
  [
    -70.75102,
    43.08003,
  ],
  [
    -70.79761,
    43.21973,
  ],
  [
    -70.98176,
    43.36789,
  ],
  [
    -70.94416,
    43.46633,
  ],
  [
    -71.08482,
    45.30524,
  ],
  [
    -70.66002,
    45.46022,
  ],
  [
    -70.30495,
    45.91479,
  ],
  [
    -70.00014,
    46.69317,
  ],
  [
    -69.23708,
    47.44777,
  ],
  [
    -68.90478,
    47.18479,
  ],
  [
    -68.2343,
    47.35462,
  ],
  [
    -67.79035,
    47.06624,
  ],
  [
    -67.79141,
    45.70258,
  ],
  [
    -67.13734,
    45.13745,
  ],
];

export default mockTreePic;

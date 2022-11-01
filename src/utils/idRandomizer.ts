const idRandomizer = () => {
  // eslint-disable-next-line max-len
  const id = `${Math.trunc((Math.random() * (999 - 100) + 100))}-${Math.trunc((Math.random() * (999 - 100) + 100))}-${Math.trunc((Math.random() * (9 - 1) + 1))}-${Math.trunc((Math.random() * (99 - 10) + 10))}`;
  return id;
};

export default idRandomizer;

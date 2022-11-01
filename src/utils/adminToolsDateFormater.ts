import moment from 'moment';

const adminToolsDateFormater = (lastVisit: string | number) => {
  let resp = moment(Number(lastVisit)).format('L');
  if (resp === moment(Date.now()).format('L')) {
    resp = 'Today';
  } else {
    resp = resp.split('/').join('.');
  }
  return resp;
};

export default adminToolsDateFormater;

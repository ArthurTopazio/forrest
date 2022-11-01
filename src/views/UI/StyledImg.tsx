import { styled } from '@mui/material/styles';

type StyledImgType = {
  src: string,
  alt?: string,
  width?: string,
};
const StyledImg = styled('img')<StyledImgType>(({
  src, alt = '', width = '100%',
}) => ({
  src,
  width,
  alt,
}));

export default StyledImg;

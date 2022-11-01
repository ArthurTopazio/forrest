import { Avatar } from '@mui/material';
import { LanguageSelectType } from 'consts/LanguageSelectData';
import React, { FC } from 'react';
import StyledP from 'views/UI/StyledP';
import '@simosol/boxes/lib/boxes.css';
import { HBox } from '@simosol/boxes';

const LanguageSelectItem: FC<LanguageSelectType> = ({ flagSrc, fullName, shortName }) => (
  <HBox gap={4} align="center">
    <Avatar src={flagSrc} sx={{ width: 24, height: 24 }} alt={shortName} />
    <StyledP sx={{ m: 0 }}>{fullName}</StyledP>
  </HBox>
);

export default LanguageSelectItem;

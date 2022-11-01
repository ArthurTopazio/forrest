import React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { MenuItem } from '@mui/material';
import { observer } from 'mobx-react';
import store from 'index';
import { LanguagesType } from 'models/state/store/AppToolsStore';
import LanguageSelectData from 'consts/LanguageSelectData';
import LanguageSelectItem from './LanguageSelectItem';

const LanguageSelect = () => {
  const { setLanguage, language } = store.application;
  const handleChange = (event: SelectChangeEvent<LanguagesType>) => {
    const newValue = event.target.value as LanguagesType;
    setLanguage(newValue);
  };

  return (
    <Select
      variant="standard"
      value={language}
      onChange={handleChange}
      label="Language"
    >
      {LanguageSelectData.map((item) => (
        <MenuItem value={item.shortName} key={item.shortName}>
          <LanguageSelectItem
            flagSrc={item.flagSrc}
            fullName={item.fullName}
            shortName={item.shortName}
          />
        </MenuItem>
      ))}
    </Select>
  );
};

export default observer(LanguageSelect);

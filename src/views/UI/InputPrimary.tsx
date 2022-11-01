import { IconButton, TextField } from '@mui/material';
import React, { useState, FC } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import HorizontalBox from './HorizontalBox';

type InputPrimaryType = {
  label: string
  value: string
  onChange: (e: any) => void
};

const InputPrimary: FC<InputPrimaryType> = ({ label, onChange, value }) => {
  const [disabled, setDisabled] = useState(true);
  const handleEdit = async () => {
    await setDisabled(!disabled);
    document.getElementById(label)?.focus();
  };
  return (
    <HorizontalBox gap={8} sx={{ mt: 2, width: '100%' }}>
      <TextField
        sx={{ width: '90%' }}
        disabled={disabled}
        label={label}
        id={label}
        value={value}
        onChange={onChange}
      />
      <IconButton onClick={handleEdit}>
        {disabled ? <CreateIcon /> : <SaveAsIcon />}
      </IconButton>
    </HorizontalBox>
  );
};

export default InputPrimary;

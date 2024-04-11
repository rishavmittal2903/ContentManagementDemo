import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import i18next from "../lib/i18n";
import { ILanguage, Langauges } from '../utility';

export default function SelectBox() {
  const [lang, setLanguage] = React.useState('en');

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
    i18next.changeLanguage(event.target.value as string)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          label="Select Language"
          onChange={handleChange}
        >
          {Langauges.map((lang:ILanguage)=> <MenuItem key={lang.code} value={lang.code}>{lang.name}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}

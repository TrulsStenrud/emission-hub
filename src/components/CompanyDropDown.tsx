import React, { useEffect } from 'react';
import { emissionData } from '../resources/ToLazyToDoFileLoad';
import { LAST_INDEX_WITH_OK_DATA, VALUES_START_INDEX } from '../resources/csvUtils';
import { FormControl, InputLabel, NativeSelect } from '@mui/material';
import { useSetRecoilState } from 'recoil';
import { compIndexAtom } from '../recoils/Atoms';

const companies = emissionData
  .split('\n')
  .slice(VALUES_START_INDEX, LAST_INDEX_WITH_OK_DATA)
  .map((line) => line.split(',')[0]);

export default function CompanyDropDown() {
  const setEmissionData = useSetRecoilState(compIndexAtom);

  useEffect(() => {
    if (companies.length == 0) return;
    setEmissionData(VALUES_START_INDEX);
  }, []);

  const onChange = (v: any) => {
    const i = +v.target.value;
    const csvIndex = i + VALUES_START_INDEX;
    setEmissionData(csvIndex);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id={'demo-simple-select-label'}>Company</InputLabel>
      <NativeSelect defaultValue={0} variant={'filled'} onChange={onChange}>
        {companies.map((company, key) => (
          <CompInfoOption key={key} value={key} name={company} />
        ))}
      </NativeSelect>
    </FormControl>
  );
}

type DropDownProps = {
  value: number;
  name: string;
};

const CompInfoOption = (props: DropDownProps) => {
  return <option value={props.value}>{props.name}</option>;
};

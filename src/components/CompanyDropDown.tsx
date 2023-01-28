import { FormControl, InputLabel, NativeSelect } from '@mui/material';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { compSelectorIndexAtom } from '../recoils/Atoms';
import { LAST_INDEX_WITH_OK_DATA, VALUES_START_INDEX } from '../resources/csvUtils';
import { emissionData } from '../resources/ToLazyToDoFileLoad';

const companies = emissionData
  .split('\n')
  .slice(VALUES_START_INDEX, LAST_INDEX_WITH_OK_DATA)
  .map((line) => line.split(',')[0]);

export default function CompanyDropDown() {
  const [selected, setSelected] = useRecoilState(compSelectorIndexAtom);

  useEffect(() => {
    const currentValue = selected;
    setSelected(-1); // hack to trigger persistance
    setSelected(currentValue);
  }, []);

  const onChange = (v: any) => {
    const i = +v.target.value;
    setSelected(i);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id={'demo-simple-select-label'}>Company</InputLabel>
      <NativeSelect value={selected} variant={'filled'} onChange={onChange}>
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

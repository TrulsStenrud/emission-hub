import { atom } from 'recoil';

export const compIndexAtom = atom<number>({
  key: 'CompInfoAtom',
  default: -1,
});

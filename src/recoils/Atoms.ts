import { number } from '@recoiljs/refine';
import { atom } from 'recoil';
import { syncEffect } from 'recoil-sync';

export const compSelectorIndexAtom = atom<number>({
  key: 'selectedCompany',
  default: 0,
  effects: [syncEffect({ refine: number() })],
});

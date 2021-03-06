import { createContext } from 'react';
import { AktualitaIF, ClenIF, StrankaIF, SponzorIF } from './dbInterfaces';

let aktuality: AktualitaIF[] | undefined;
let clenove: ClenIF[] | undefined;
let stranky: StrankaIF[] | undefined;
let sponzori: SponzorIF[] | undefined;

export const dbContext = createContext({
  aktuality,
  clenove,
  stranky,
  sponzori,
});

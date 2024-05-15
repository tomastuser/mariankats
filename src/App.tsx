import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Uvod from './pages/Uvod';
import Admin from './pages/Admin';

import OMariance from './pages/ONas/OMariance';
import Zazemi from './pages/ONas/Zazemi';
import NasiLide from './pages/ONas/NasiLide';
import Program from './pages/ONas/Program';
import Projekty from './pages/ONas/Projekty';
import Sponzori from './pages/ONas/Sponzori';
import Dokumenty from './pages/ONas/Dokumenty';
import NabidkaPrace from './pages/ONas/NabidkaPrace';

import Zapis from './pages/Info/Zapis';
import Cenik from './pages/Info/Cenik';
import CoSSebou from './pages/Info/CoSSebou';
import NasePravidla from './pages/Info/NasePravidla';
import JakSeZije from './pages/Info/JakSeZije';
import TipyProRodice from './pages/Info/TipyProRodice';

import Aktualita from './pages/Aktuality/Aktualita';
import AktualityVse from './pages/Aktuality/AktualityVse';

import DalsiAktivity from './pages/DalsiAktivity/DalsiAktivity';
import Krouzky from './pages/DalsiAktivity/Krouzky';
import Tabory from './pages/DalsiAktivity/Tabory';
import Ekocentrum from './pages/DalsiAktivity/Ekocentrum';
import DalsiAkce from './pages/DalsiAktivity/DalsiAkce';

import Kontakt from './pages/Kontakt';

import Foto from './pages/Aktuality/Foto';
import ScrollToTop from './utils/ScrollToTop';
import useFetch from './utils/useFetch';
import PageNotFound from './pages/404';

import { dbContext } from './utils/dbContext';
// import { aktuality, clenove, sponzori, stranky } from './mockedData';
import {
  AktualitaIF,
  ClenIF,
  StrankaIF,
  SponzorIF,
} from './utils/dbInterfaces';

const App = () => {
  let aktuality: AktualitaIF[] | undefined = useFetch(
    'https://editor.lesnimarianka.cz/api/aktuality?pagination[start]=0&pagination[limit]=1000&populate=*'
  );
  let clenove: ClenIF[] | undefined = useFetch(
    'https://editor.lesnimarianka.cz/api/tym-clenove?pagination[start]=0&pagination[limit]=1000&populate=*'
  );
  let stranky: StrankaIF[] | undefined = useFetch(
    'https://editor.lesnimarianka.cz/api/stranky?pagination[start]=0&pagination[limit]=1000&populate=*'
  );
  let sponzori: SponzorIF[] | undefined = useFetch(
    'https://editor.lesnimarianka.cz/api/sponzori?pagination[start]=0&pagination[limit]=1000&populate=*'
  );

  return (
    <Router>
      <ScrollToTop />
      <div className='App'>
        <dbContext.Provider value={{ aktuality, clenove, stranky, sponzori }}>
          <Routes>
            <Route path='/' element={<Uvod />} />
            <Route path='/onas' element={<OMariance />} />
            <Route path='/onas/omariance' element={<OMariance />} />
            <Route path='/onas/zazemi' element={<Zazemi />} />
            <Route path='/onas/nastym' element={<NasiLide />} />
            <Route path='/onas/program' element={<Program />} />
            <Route path='/onas/projekty' element={<Projekty />} />
            <Route path='/onas/sponzori' element={<Sponzori />} />
            <Route path='/onas/dokumenty' element={<Dokumenty />} />
            <Route path='/onas/nabidkaspoluprace' element={<NabidkaPrace />} />

            <Route path='/info' element={<Zapis />} />
            <Route path='/info/zapis' element={<Zapis />} />
            <Route path='/info/cenik' element={<Cenik />} />
            <Route path='/info/cossebou' element={<CoSSebou />} />
            <Route path='/info/nasepravidla' element={<NasePravidla />} />
            <Route path='/info/jaksezije' element={<JakSeZije />} />
            <Route path='/info/tipyprorodice' element={<TipyProRodice />} />

            <Route path='/aktuality' element={<AktualityVse />} />
            <Route path='/aktualita/:id' element={<Aktualita />} />
            <Route path='/aktuality/strana/:id' element={<AktualityVse />} />

            <Route path='/kavyl' element={<DalsiAktivity />} />
            <Route path='/kavyl/krouzky' element={<Krouzky />} />
            <Route path='/kavyl/tabory' element={<Tabory />} />
            <Route path='/kavyl/ekocentrum' element={<Ekocentrum />} />
            <Route path='/kavyl/dalsiakce' element={<DalsiAkce />} />

            <Route path='/kontakt' element={<Kontakt />} />

            <Route path='/aktualita/:id/foto' element={<Foto />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </dbContext.Provider>
      </div>
    </Router>
  );
};

export default App;

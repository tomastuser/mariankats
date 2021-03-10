import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import './slick-theme.css';
import './slick.css';

import Uvod from './pages/Uvod';
import Admin from './pages/Admin';

import OMariance from './pages/ONas/OMariance';
import Zazemi from './pages/ONas/Zazemi';
import NasiLide from './pages/ONas/NasiLide';
import Program from './pages/ONas/Program';
import Projekty from './pages/ONas/Projekty';
import Sponzori from './pages/ONas/Sponzori';
import Dokumenty from './pages/ONas/Dokumenty';

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
import Prednasky from './pages/DalsiAktivity/Prednasky';

import Kontakt from './pages/Kontakt';

import Foto from './pages/Aktuality/Foto';
import ScrollToTop from './utils/ScrollToTop';
import useFetch from './utils/useFetch';
import PageNotFound from './pages/404';

import { dbContext } from './utils/dbContext';
import {
  AktualitaIF,
  ClenIF,
  StrankaIF,
  SponzorIF,
} from './utils/dbInterfaces';

const App = () => {
  let aktuality: AktualitaIF[] | undefined = useFetch(
    'https://marianka.herokuapp.com/aktuality/'
  );
  let clenove: ClenIF[] | undefined = useFetch(
    'https://marianka.herokuapp.com/lide'
  );
  let stranky: StrankaIF[] | undefined = useFetch(
    'https://marianka.herokuapp.com/stranky'
  );
  let sponzori: SponzorIF[] | undefined = useFetch(
    'https://marianka.herokuapp.com/sponzori'
  );

  return (
    <Router>
      <ScrollToTop />
      <div className='App'>
        <dbContext.Provider value={{ aktuality, clenove, stranky, sponzori }}>
          <Switch>
            <Route path='/' exact component={Uvod} />
            <Route path='/onas' exact component={OMariance} />
            <Route path='/onas/omariance' exact component={OMariance} />
            <Route path='/onas/zazemi' exact component={Zazemi} />
            <Route path='/onas/nastym' exact component={NasiLide} />
            <Route path='/onas/program' exact component={Program} />
            <Route path='/onas/projekty' exact component={Projekty} />
            <Route path='/onas/sponzori' exact component={Sponzori} />
            <Route path='/onas/dokumenty' exact component={Dokumenty} />

            <Route exact path='/info' component={Zapis} />
            <Route exact path='/info/zapis' component={Zapis} />
            <Route exact path='/info/cenik' component={Cenik} />
            <Route exact path='/info/cossebou' component={CoSSebou} />
            <Route exact path='/info/nasepravidla' component={NasePravidla} />
            <Route exact path='/info/jaksezije' component={JakSeZije} />
            <Route exact path='/info/tipyprorodice' component={TipyProRodice} />

            <Route path='/aktuality' exact component={AktualityVse} />
            <Route exact path='/aktualita/:id' component={Aktualita} />
            <Route
              exact
              path='/aktuality/strana/:id'
              component={AktualityVse}
            />

            <Route exact path='/kavyl' component={DalsiAktivity} />
            <Route exact path='/kavyl/krouzky' component={Krouzky} />
            <Route exact path='/kavyl/tabory' component={Tabory} />
            <Route exact path='/kavyl/prednasky' component={Prednasky} />

            <Route exact path='/kontakt' component={Kontakt} />

            <Route exact path='/aktualita/:id/foto' component={Foto} />
            <Route exact path='/admin' component={Admin} />
            <Route path='*' exact component={PageNotFound} />
          </Switch>
        </dbContext.Provider>
      </div>
    </Router>
  );
};

export default App;

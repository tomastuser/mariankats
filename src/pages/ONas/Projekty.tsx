import React from 'react';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const Projekty = () => {
  return (
    <Layout title='Projekty'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Projekty' />
          <p>
            {' '}
            Název projektu: Lesní mateřská škola Mariánka Zdroj podpory:
            Operační program Výzkum, vývoj a vzdělávání, MŠMT Název příjemce
            podpory: Lesní mateřská škola Mariánka Datum zahájení realizace: 1.
            9. 2019 Datum plánovaného ukončení: 31. 8. 2021 Název specifického
            cíle: Zvýšení kvality předškolního vzdělávání včetně usnadnění
            přechodu dětí na ZŠ Obsah projektu: Projekt je zaměřen na jedno
            z/kombinaci následujících témat: personální podpora, osobnostně
            profesní rozvoj pedagogů, společné vzdělávání dětí, podpora
            extrakurikulárních/rozvojových aktivit, aktivity rozvíjející ICT,
            spolupráce s rodiči dětí, spolupráce s veřejností.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Projekty;

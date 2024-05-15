import React from 'react';
import ContentImport from '../../components/ContentImport';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const TipyProRodice = () => {
  return (
    <Layout title='Tipy pro rodiče'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Tipy pro rodiče' />
          <ContentImport nazev='Tipy pro rodiče' />
          {/* <FotoCont name='cenik.jpg' alt='TipyProRodice' /> */}
        </div>
      </div>
    </Layout>
  );
};

export default TipyProRodice;

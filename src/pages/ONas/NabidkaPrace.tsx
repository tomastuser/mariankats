import React from 'react';
import Layout from '../../components/Layout';
import ContentImport from '../../components/ContentImport';
import Zaklad from '../../components/Zaklad';

function NabidkaPrace() {
  return (
    <Layout title='Nabídka práce'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Nabídka práce' />
          <ContentImport nazev='Nabídka práce' />
        </div>
      </div>
    </Layout>
  );
}

export default NabidkaPrace;

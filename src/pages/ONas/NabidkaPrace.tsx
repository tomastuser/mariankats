import React from 'react';
import Layout from '../../components/Layout';
import ContentImport from '../../components/ContentImport';
import Zaklad from '../../components/Zaklad';

function NabidkaPrace() {
  return (
    <Layout title='Nabídka spolupráce'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Nabídka spolupráce' />
          <ContentImport nazev='Nabídka spolupráce' />
        </div>
      </div>
    </Layout>
  );
}

export default NabidkaPrace;

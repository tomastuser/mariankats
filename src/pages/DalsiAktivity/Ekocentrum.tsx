import React from 'react';
import ContentImport from '../../components/ContentImport';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const Ekocentrum = () => {
  return (
    <Layout title='Ekocentrum Jezerka'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Ekocentrum Jezerka' />
          <ContentImport nazev='Ekocentrum' />
        </div>
      </div>
    </Layout>
  );
};

export default Ekocentrum;

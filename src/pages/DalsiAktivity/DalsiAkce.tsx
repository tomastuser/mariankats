import React from 'react';
import ContentImport from '../../components/ContentImport';
import FotoCont from '../../components/FotoCont';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const DalsiAkce = () => {
  return (
    <Layout title='Další akce'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Další akce' />
          <ContentImport nazev='Další akce' />
          <FotoCont name='prednasky.jpg' alt='Další akce' />
        </div>
      </div>
    </Layout>
  );
};

export default DalsiAkce;

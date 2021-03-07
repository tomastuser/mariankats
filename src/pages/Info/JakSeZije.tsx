import React from 'react';
import ContentImport from '../../components/ContentImport';
import FotoCont from '../../components/FotoCont';
import Layout from '../../components/Layout';
import Andel from '../../components/Uvod/Andel';
import Zaklad from '../../components/Zaklad';

const JakSeZije = () => {
  return (
    <Layout title='Jak se žije v lesní školce'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Jak se žije v lesní školce' />
          <ContentImport nazev='Jak se žije' />
          <Andel />
        </div>
      </div>
    </Layout>
  );
};

export default JakSeZije;

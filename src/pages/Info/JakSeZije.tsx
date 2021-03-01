import React from 'react';
import ContentImport from '../../components/ContentImport';
import FotoCont from '../../components/FotoCont';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const JakSeZije = () => {
  return (
    <Layout title='Jak se žije v lesní školce'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Jak se žije v lesní školce' />
          <ContentImport nazev='Jak se žije' />
          <FotoCont name='cenik.jpg' alt='JakSeZije' />
        </div>
      </div>
    </Layout>
  );
};

export default JakSeZije;

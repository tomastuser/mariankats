import React from 'react';
import ContentImport from '../../components/ContentImport';
import FotoCont from '../../components/FotoCont';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const JakSeZije = () => {
  return (
    <Layout title='Ceník'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Ceník' />
          <ContentImport nazev='Jak se žije' />
          <FotoCont name='cenik.jpg' alt='JakSeZije' />
        </div>
      </div>
    </Layout>
  );
};

export default JakSeZije;

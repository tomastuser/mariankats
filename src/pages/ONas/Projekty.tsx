import React from 'react';
import ContentImport from '../../components/ContentImport';
import FotoCont from '../../components/FotoCont';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const Projekty = () => {
  return (
    <Layout title='Projekty'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Projekty' />
          <ContentImport nazev='Projekty 1.1' />
          <FotoCont name='OP JAK Mari 2023.jpg' alt='JAK Mari' />
          <ContentImport nazev='Projekty 1.2' />
          <FotoCont name='EU.jpg' alt='EU' />
          <ContentImport nazev='Projekty 1.3' />
          <FotoCont name='projekty.jpg' alt='Projekty 1' />
          <ContentImport nazev='Projekty 2' />
          <FotoCont name='projekty2.jpg' alt='Projekty 2' />
        </div>
      </div>
    </Layout>
  );
};

export default Projekty;

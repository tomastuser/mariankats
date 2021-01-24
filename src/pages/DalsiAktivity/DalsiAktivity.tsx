import React from 'react';
import Layout from '../../components/Layout';
import ContentImport from '../../components/ContentImport';
import Zaklad from '../../components/Zaklad';

const DalsiAktivity = () => {
  return (
    <Layout title='Aktivity Kavylu'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Aktivity Kavylu' />
          <ContentImport nazev='Aktivity Kavylu' />
        </div>
      </div>
    </Layout>
  );
};

export default DalsiAktivity;

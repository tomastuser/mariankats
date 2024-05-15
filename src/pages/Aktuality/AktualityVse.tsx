import React, { useState, useContext } from 'react';

import Pagination from '../../components/Pagination';
import AktualitaZastupce from '../../components/AktualitaZastupce';
import Layout from '../../components/Layout';
import { dbContext } from '../../utils/dbContext';
import { AktualitaIF } from '../../utils/dbInterfaces';
import Loading from '../../components/Loading';
import { useParams } from 'react-router-dom';

const Aktuality = () => {
  const { aktuality } = useContext(dbContext);
  const params = useParams();

  const [currentPage, setCurrentPage] = useState(
    params.id ? Number(params.id) : 1
  );
  const postsPerPage: number = 6;

  const serazeniOdNejvyssiho = (): AktualitaIF[] => {
    return [].slice.call(aktuality).sort((a: AktualitaIF, b: AktualitaIF) => {
      return Number(b.id) - Number(a.id);
    });
  };

  let aktualitySorted: AktualitaIF[] = serazeniOdNejvyssiho();
  const pinned = aktualitySorted.find(
    (akt: AktualitaIF) => Number(akt.id) === 25
  );
  if (aktualitySorted && pinned) {
    const aktualityRemovePinned = aktualitySorted.filter(
      (akt) => Number(akt.id) !== 25
    );
    aktualityRemovePinned.unshift(pinned);
    aktualitySorted = aktualityRemovePinned;
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const aktualityZde = aktualitySorted.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Layout title='Aktuality'>
      <div className='mainOstatni'>
        {aktuality && aktuality.length > 0 ? (
          <div className='aktualityContainer'>
            <h1 style={{ zIndex: 6 }}>Aktuality</h1>
            <br />
            <div className='aktuality'>
              {aktualityZde.map((aktualita: AktualitaIF, index: number) => (
                <AktualitaZastupce
                  key={aktualita.id}
                  aktualita={aktualita}
                  pozadi={`aktualitaPozadi${index + 1}`}
                />
              ))}
            </div>
            <br />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={aktuality.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </Layout>
  );
};

export default Aktuality;

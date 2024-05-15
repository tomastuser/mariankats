import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import { dbContext } from '../../utils/dbContext';
import { AktualitaIF } from '../../utils/dbInterfaces';

const Foto = () => {
  const { aktuality } = useContext(dbContext);
  const navigate = useNavigate();
  const params = useParams();

  let aktualita: AktualitaIF | undefined = aktuality?.find((akt) => {
    return String(akt.id) === params.id;
  });
  return (
    <Layout title={`Foto č. ${aktualita && aktualita.id}`}>
      <div className='mainOstatni'>
        {aktualita ? (
          <div className='fotoContainer'>
            <div className='foto'>
              {aktualita.Image?.data || aktualita.ImageUrl ? (
                <img
                  src={
                    aktualita.Image?.data
                      ? aktualita.Image.data.attributes.url
                      : aktualita.ImageUrl
                  }
                  alt={aktualita.Nazev}
                  onClick={() => navigate(-1)}
                  onKeyDown={() => navigate(-1)}
                  role='presentation'
                />
              ) : (
                <h1>Foto neexistuje</h1>
              )}
              <div
                className='button'
                style={{
                  width: '35%',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}
                onClick={() => navigate(-1)}
                onKeyDown={() => navigate(-1)}
                role='button'
                tabIndex={0}
              >
                Zpět
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </Layout>
  );
};

export default Foto;

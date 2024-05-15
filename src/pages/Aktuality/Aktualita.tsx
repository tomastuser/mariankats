import React, { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import { dbContext } from '../../utils/dbContext';
import { AktualitaIF } from '../../utils/dbInterfaces';

const Aktualita = () => {
  const { aktuality } = useContext(dbContext);
  const navigate = useNavigate();
  const params = useParams();

  let aktualita: AktualitaIF | undefined = aktuality?.find((akt) => {
    return String(akt.id) === params.id;
  });
  return (
    <Layout title={aktualita ? aktualita.Nazev : 'loading'}>
      <div className='mainOstatni'>
        {aktuality && aktualita ? (
          <div className='aktualityContainer'>
            <div
              className={`aktualita aktualitaPozadi${Math.floor(
                Math.random() * 6 + 1
              )}`}
            >
              <h2 className='aktualitaNadpis'>{aktualita.Nazev}</h2>
              <div className='aktualitaTelo'>
                <div className='aktualitaImg'>
                  <div className='aktualitaImgCont'>
                    {(aktualita.Image?.data || aktualita.ImageUrl) && (
                      <Link to={`/aktualita/${aktualita.id}/foto`}>
                        <div>
                          <img
                            src={
                              aktualita.Image?.data
                                ? aktualita.Image.data.attributes.url
                                : aktualita.ImageUrl
                            }
                            alt={aktualita.Nazev}
                          />
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
                {aktualita.Text && (
                  <div
                    dangerouslySetInnerHTML={{ __html: aktualita.Text }}
                    className='aktualitaText'
                  />
                )}
              </div>
              <button
                className='aktualitaButton button'
                onClick={() => navigate(-1)}
                onKeyDown={() => navigate(-1)}
              >
                Zpět
              </button>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </Layout>
  );
};

export default Aktualita;

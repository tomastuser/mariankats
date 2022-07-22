import React, { useContext } from 'react';
import { dbContext } from '../../utils/dbContext';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';
import Loading from '../../components/Loading';
import { SponzorIF } from '../../utils/dbInterfaces';

const Sponzori = () => {
  const { sponzori } = useContext(dbContext);
  const sponzoriSorted = () => {
    return [].slice.call(sponzori).sort((a: SponzorIF, b: SponzorIF) => {
      return Number(a.Poradi) - Number(b.Poradi);
    });
  };

  return (
    <Layout title='Podporují nás'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Podporují nás' />
          <div className='sponzoriCont'>
            {sponzori && sponzori.length > 0 ? (
              sponzoriSorted().map((sponzor: SponzorIF) => (
                <div key={sponzor.id}>
                  <a href={sponzor.Odkaz}>
                    <img
                      style={{
                        height: sponzor.Vyska ? sponzor.Vyska : '5vw',
                        padding: sponzor.Okraj ? `${sponzor.Okraj}vh` : '0',
                      }}
                      alt=''
                      src={sponzor.Image.url}
                    ></img>
                    {sponzor.Popis && <h4>{sponzor.Popis}</h4>}
                  </a>
                </div>
              ))
            ) : (
              <Loading />
            )}
          </div>
          <p>
            Děkujeme všem partnerům a sponzorům za jejich příspěvky a
            vstřícnost. Hluboké poděkování patří také všem rodičům, přátelům a
            příznivcům za jejich obětavou spolupráci při našich aktivitách.
          </p>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <iframe
              src='https://givt.cz/services/widget/widget.php?id=3728'
              style={{
                width: '480px',
                maxWidth: '100%',
                height: '370px',
                border: 'none',
                overflow: 'hidden',
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sponzori;

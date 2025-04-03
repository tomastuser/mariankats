import React, { useContext } from 'react';
import { dbContext } from '../utils/dbContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaperPlane,
  faHome,
  faPhone,
  faBusAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import givt from '../public/givt.png';
import alms from '../public/alms.png';
import girlanda from '../public/girlmari.png';
import darujme from '../public/darujme.png';
import cert from '../public/cert.png';
import { StrankaIF } from '../utils/dbInterfaces';
import Loading from './Loading';

const Footer = () => {
  const { stranky } = useContext(dbContext);
  const paticka: StrankaIF | undefined = stranky
    ? stranky.find((stranka: StrankaIF) => stranka.Nazev === 'Paticka')
    : undefined;
  const arrayOfIcons = [
    <FontAwesomeIcon icon={faPaperPlane} size='1x' fixedWidth />,
    <FontAwesomeIcon icon={faHome} size='1x' fixedWidth />,
    <FontAwesomeIcon icon={faBusAlt} size='1x' fixedWidth />,
    <FontAwesomeIcon icon={faPhone} size='1x' fixedWidth />,
    <FontAwesomeIcon icon={faFacebookF} size='1x' fixedWidth />,
    <FontAwesomeIcon icon={faInstagram} size='1x' fixedWidth />,
  ];
  return (
    <div className='Footer'>
      <div className='girlanda'>
        <img src={girlanda} alt='girlanda' />
      </div>
      <div className='FooterD'>
        <div className='footS'>
          <a href='http://www.lesnims.cz/'>
            <img src={alms} alt='alms'></img>
          </a>
        </div>
        <div className='footS'>
          <a href='https://www.lesnims.cz/lesni-ms/standardy-kvality.html'>
            <img src={cert} alt='cert'></img>
          </a>
        </div>
        <div className='footerInfo'>
          <ul>
            {paticka ? (
              paticka &&
              paticka.Text &&
              paticka.Text.split('</h4>').map((radek, index) => (
                <li
                  key={index}
                  style={{ display: 'flex', flexDirection: 'row' }}
                >
                  <span style={{ marginRight: '8px' }}>
                    {arrayOfIcons[index]}
                  </span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: `${radek}</h4>`,
                    }}
                  />
                </li>
              ))
            ) : (
              <Loading />
            )}
          </ul>
        </div>
        <div className='footS'>
          <a href='https://www.darujme.cz/projekt/1200844'>
            <img src={darujme} alt='darujme'></img>
          </a>
        </div>
        <div className='footS'>
          <a href='http://bit.ly/Podporuji-Kavyl'>
            <img src={givt} alt='givt'></img>
          </a>
        </div>
      </div>
      <div className='FooterM'>
        <div className='footerInfo'>
          <ul>
            {paticka &&
              paticka.Text &&
              paticka.Text.split('</h4>').map((radek, index) => (
                <li
                  key={index}
                  style={{ display: 'flex', flexDirection: 'row' }}
                >
                  <span style={{ marginRight: '8px' }}>
                    {arrayOfIcons[index]}
                  </span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: `${radek}</h4>`,
                    }}
                  />
                </li>
              ))}
          </ul>
        </div>
        <div>
          <a href='https://www.lesnims.cz/lesni-ms/standardy-kvality.html'>
            <img src={cert} alt='cert'></img>
          </a>
        </div>
        <div>
          <a href='http://www.lesnims.cz/'>
            <img src={alms} alt='alms'></img>
          </a>
        </div>
        <div>
          <a href='https://www.darujme.cz/projekt/1200844'>
            <img src={darujme} alt='darujme'></img>
          </a>
        </div>
        <div>
          <a href='http://bit.ly/Podporuji-Kavyl'>
            <img src={givt} alt='givt'></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

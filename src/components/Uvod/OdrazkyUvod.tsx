import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBug,
  faMapSigns,
  faCloudSun,
  faMapMarkedAlt,
  faComments,
  faCampground,
  faTree,
  faHome,
  faSeedling,
  faFrog,
} from '@fortawesome/free-solid-svg-icons';

function OdrazkyUvod() {
  return (
    <div className='odrazkyUvodContainer'>
      <h1 className='odrazkyNadpis'>Lesní školka Mariánka</h1>
      <ul className='odrazkySloupecA'>
        <li>
          <FontAwesomeIcon
            className='ikonaM'
            icon={faBug}
            size='1x'
            fixedWidth
          />
          {'  '}dětství v přírodě{' '}
          <FontAwesomeIcon
            className='ikonaD'
            icon={faBug}
            size='1x'
            fixedWidth
          />
        </li>
        <li>
          <FontAwesomeIcon
            className='ikonaM'
            icon={faSeedling}
            size='1x'
            fixedWidth
          />
          {'  '} učení prožitkem{' '}
          <FontAwesomeIcon
            className='ikonaD'
            icon={faSeedling}
            size='1x'
            fixedWidth
          />
        </li>
        <li>
          <FontAwesomeIcon
            className='ikonaM'
            icon={faFrog}
            size='1x'
            fixedWidth
          />
          {'  '} bez zdí a plotů{' '}
          <FontAwesomeIcon
            className='ikonaD'
            icon={faFrog}
            size='1x'
            fixedWidth
          />
        </li>
        <li>
          <FontAwesomeIcon
            className='ikonaM'
            icon={faCampground}
            size='1x'
            fixedWidth
          />
          {'  '} kapacita 15 dětí{' '}
          <FontAwesomeIcon
            className='ikonaD'
            icon={faCampground}
            size='1x'
            fixedWidth
          />
        </li>
        <li>
          <FontAwesomeIcon
            className='ikonaM'
            icon={faCloudSun}
            size='1x'
            fixedWidth
          />
          {'  '} otevřeno 7:30 až 16:00{' '}
          <FontAwesomeIcon
            className='ikonaD'
            icon={faCloudSun}
            size='1x'
            fixedWidth
          />
        </li>
      </ul>
      <div className='caraOdrazky'></div>
      <ul className='odrazkySloupecB'>
        <li>
          <FontAwesomeIcon icon={faTree} size='1x' fixedWidth />
          {'  '} dlouholetá tradice
        </li>
        <li>
          <FontAwesomeIcon icon={faComments} size='1x' fixedWidth />
          {'  '} kvalifikovaní pedagogové
        </li>
        <li>
          <FontAwesomeIcon icon={faHome} size='1x' fixedWidth />
          {'  '} plnohodnotné vzdělávání, včetně předškoláků
        </li>
        <li>
          <FontAwesomeIcon icon={faMapMarkedAlt} size='1x' fixedWidth />
          {'  '} zápis v rejstříku MŠMT
        </li>
        <li>
          <FontAwesomeIcon icon={faMapSigns} size='1x' fixedWidth />
          {'  '} člen Asociace lesních mateřských škol
        </li>
      </ul>
    </div>
  );
}

export default OdrazkyUvod;

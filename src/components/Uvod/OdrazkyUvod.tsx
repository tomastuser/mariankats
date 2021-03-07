import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBug,
  faHandsHelping,
  faCloudSun,
  faPenNib,
  faHandHoldingHeart,
  faCampground,
  faTree,
  faPaw,
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
          <FontAwesomeIcon icon={faHandHoldingHeart} size='1x' fixedWidth />
          {'  '} kvalifikovaní pedagogové
        </li>
        <li>
          <FontAwesomeIcon icon={faPaw} size='1x' fixedWidth />
          {'  '} plnohodnotné vzdělávání, včetně předškoláků
        </li>
        <li>
          <FontAwesomeIcon icon={faPenNib} size='1x' fixedWidth />
          {'  '} zápis v rejstříku MŠMT
        </li>
        <li>
          <FontAwesomeIcon icon={faHandsHelping} size='1x' fixedWidth />
          {'  '} člen Asociace lesních mateřských škol
        </li>
      </ul>
    </div>
    // <div className='odrazkyUvodContainer'>
    //   <h1 className='odrazkyNadpis'>Lesní školka Mariánka</h1>
    //   <div className='odrazky'>
    //     <div style={{ textAlign: 'right', gridRow: '1/2', gridColumn: '1/2' }}>
    //       dětství v přírodě
    //     </div>
    //     <div style={{ textAlign: 'right', gridRow: '2/3', gridColumn: '1/2' }}>
    //       učení prožitkem
    //     </div>
    //     <div style={{ textAlign: 'right', gridRow: '3/4', gridColumn: '1/2' }}>
    //       bez zdí a plotů
    //     </div>
    //     <div style={{ textAlign: 'right', gridRow: '4/5', gridColumn: '1/2' }}>
    //       kapacita 15 dětí
    //     </div>
    //     <div style={{ textAlign: 'right', gridRow: '5/6', gridColumn: '1/2' }}>
    //       otevřeno 7:30 až 16:00
    //     </div>
    //     <FontAwesomeIcon
    //       icon={faBug}
    //       size='1x'
    //       fixedWidth
    //       style={{ gridRow: '1/2', gridColumn: '2/3' }}
    //     />
    //     <FontAwesomeIcon
    //       icon={faSeedling}
    //       size='1x'
    //       fixedWidth
    //       style={{ gridRow: '2/3', gridColumn: '2/3' }}
    //     />
    //     <FontAwesomeIcon
    //       icon={faFrog}
    //       size='1x'
    //       fixedWidth
    //       style={{ gridRow: '3/4', gridColumn: '2/3' }}
    //     />
    //     <FontAwesomeIcon
    //       icon={faCampground}
    //       size='1x'
    //       fixedWidth
    //       style={{ gridRow: '4/5', gridColumn: '2/3' }}
    //     />
    //     <FontAwesomeIcon
    //       icon={faCloudSun}
    //       size='1x'
    //       fixedWidth
    //       style={{ gridRow: '5/6', gridColumn: '2/3' }}
    //     />
    //     <div className='caraOdrazky'></div>
    //     <FontAwesomeIcon
    //       style={{ gridRow: '1/2', gridColumn: '4/5' }}
    //       icon={faTree}
    //       size='1x'
    //       fixedWidth
    //     />
    //     <FontAwesomeIcon
    //       style={{ gridRow: '2/3', gridColumn: '4/5' }}
    //       icon={faHandHoldingHeart}
    //       size='1x'
    //       fixedWidth
    //     />
    //     <FontAwesomeIcon
    //       style={{ gridRow: '3/4', gridColumn: '4/5' }}
    //       icon={faPaw}
    //       size='1x'
    //       fixedWidth
    //     />
    //     <FontAwesomeIcon
    //       style={{ gridRow: '4/5', gridColumn: '4/5' }}
    //       icon={faPenNib}
    //       size='1x'
    //       fixedWidth
    //     />
    //     <FontAwesomeIcon
    //       style={{ gridRow: '5/6', gridColumn: '4/5' }}
    //       icon={faHandsHelping}
    //       size='1x'
    //       fixedWidth
    //     />
    //     <div style={{ gridRow: '1/2', gridColumn: '5/6' }}>
    //       dlouholetá tradice
    //     </div>
    //     <div style={{ gridRow: '2/3', gridColumn: '5/6' }}>
    //       kvalifikovaní pedagogové
    //     </div>
    //     <div style={{ gridRow: '3/4', gridColumn: '5/6' }}>
    //       plnohodnotné vzdělávání, včetně předškoláků
    //     </div>
    //     <div style={{ gridRow: '4/5', gridColumn: '5/6' }}>
    //       zápis v rejstříku MŠMT
    //     </div>
    //     <div style={{ gridRow: '5/6', gridColumn: '5/6' }}>
    //       člen Asociace lesních mateřských škol
    //     </div>
    //   </div>
    // </div>
  );
}

export default OdrazkyUvod;

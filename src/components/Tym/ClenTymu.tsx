import React from 'react';
import { ClenIF } from '../../utils/dbInterfaces';

import tec11 from '../../public/tec1-1.png';
import tec12 from '../../public/tec1-2.png';
import tec21 from '../../public/tec2-1.png';
import tec22 from '../../public/tec2-2.png';
import tec31 from '../../public/tec3-1.png';
import tec32 from '../../public/tec3-2.png';

const ClenTymu = ({ clen }: { clen: ClenIF }) => (
  <div className='clenTymu'>
    <div className='profilFoto'>
      {Number(clen.id) % 3 === 0 ? (
        <img alt='profilTecky' className='profilFotoTecky' src={tec31} />
      ) : Number(clen.id) % 2 === 0 ? (
        <img alt='profilTecky' className='profilFotoTecky' src={tec21} />
      ) : (
        <img alt='profilTecky' className='profilFotoTecky' src={tec11} />
      )}
      {(clen.Image?.data || clen.ImageUrl) && (
        <img
          src={
            clen.Image?.data
              ? clen.Image.data.attributes.url
              : clen.ImageUrl
              ? clen.ImageUrl
              : ''
          }
          alt={clen.Jmeno}
        />
      )}
      {Number(clen.id) % 3 === 0 ? (
        <img alt='profilTecky' className='profilFotoTecky' src={tec32} />
      ) : Number(clen.id) % 2 === 0 ? (
        <img alt='profilTecky' className='profilFotoTecky' src={tec22} />
      ) : (
        <img alt='profilTecky' className='profilFotoTecky' src={tec12} />
      )}
    </div>
    <h1>{clen.Jmeno}</h1>
    <h3>{`(${clen.Pozice})`}</h3>
    <div className='clenTymuText'>
      <div dangerouslySetInnerHTML={{ __html: clen.Popis }} />
    </div>
  </div>
);

export default ClenTymu;

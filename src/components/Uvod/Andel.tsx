import React, { useState } from 'react';
import Hlava from '../../public/andel_hlava.png';
import Telo from '../../public/andel_telo.png';
import Kridla from '../../public/andel_kridla.png';
import Klikni from '../../public/klikni.png';

const Andel = () => {
  const [kridlaAct, setKridla] = useState(true);
  return (
    <div className='andel'>
      <div
        onClick={() => setKridla((kridlaAct) => !kridlaAct)}
        className='andelObrazek'
      >
        <img className='hlava' src={Hlava} alt='' />
        <img className='dotkni' src={Klikni} alt='' />
        <img
          className={kridlaAct ? 'kridlaActive kridla' : 'kridla'}
          src={Kridla}
          alt=''
        />
        <img className='trup' src={Telo} alt=''></img>
      </div>
    </div>
  );
};

export default Andel;

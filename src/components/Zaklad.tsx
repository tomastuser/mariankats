import React, { useRef } from 'react';

import caraNadpis from '../public/cara_nadpis.png';
import L1_1 from '../public/L1_bubli_stromik.png';
import L1_2 from '../public/L1_houpy_stromik.png';
import L1_3 from '../public/L1_na spickach.png';
import L2 from '../public/L2_stromik.png';

import R1_1 from '../public/R1_bubli_stromik.png';
import R1_2 from '../public/R1_houpi_stromik.png';
import R1_3 from '../public/R1_na spickach_stromik.png';
import R2 from '../public/R2 stromik.png';

const Zaklad = ({ nazev }: { nazev: string }) => {
  const random = useRef(Math.floor(Math.random() * 3));
  // let random = 2;
  return (
    <div>
      <h1 className='nazev'>{nazev}</h1>
      <div className='nazevCont'>
        <div className='LCont'>
          {random.current === 0 && <img className='L1' alt='L1' src={L1_1} />}
          {random.current === 1 && <img className='L1_2' alt='L1' src={L1_2} />}
          {random.current === 2 && <img className='L1' alt='L1' src={L1_3} />}
          <img className='L2' alt='L2' src={L2} />
        </div>
        <img className='caraNadpis' alt='caraNadpis' src={caraNadpis} />
        <div className='RCont'>
          {random.current === 0 && (
            <img className='R1' alt='skritek1' src={R1_1} />
          )}
          {random.current === 1 && (
            <img className='R1_2' alt='skritek1' src={R1_2} />
          )}
          {random.current === 2 && (
            <img className='R1' alt='skritek1' src={R1_3} />
          )}
          <img className='R2' alt='R2' src={R2} />
        </div>
      </div>
    </div>
  );
};

export default Zaklad;

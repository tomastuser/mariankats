import React, { useState, useEffect } from 'react';
import sipkaB from '../../public/sipkaB.png';

const Uvod = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (counter < 1) setCounter(counter + 1);
      else setCounter(0);
    }, 4000);
    return () => clearInterval(timer);
  });
  return (
    <div>
      <div className='uvodSliderCont'>
        <div className='uvodSlider'>
          <img alt='   ' src='https://lesnikavyl.cz/images/mari_uvod.jpg' />
        </div>
      </div>
      <div className='vitejtePruh'>
        <h2>
          Vítejte v Mariánce!
          <br />
          Školce bez zdí a plotů!
        </h2>
      </div>
      {/* <div className='vitejteCont'>
        <div className={`vitejte1 ${counter === 0 ? 'active' : 'disabled'}`}>
          Vítejte
          <br />
          na&nbsp; stránkách
          <br />
          spolku&nbsp; Kavyl !
        </div>
      </div>
      <div className='vitejteCont'>
        <div className={`vitejte2 ${counter === 1 ? 'active' : 'disabled'}`}>
          Vracíme &nbsp;dětem
          <br />
          přírodu a&nbsp; dětství
          <br />
          na &nbsp;lukách
          <br />
          a&nbsp;&nbsp; v &nbsp;lesích
        </div>
      </div> */}
      <div className='vitejteCont'>
        <div
          className='sipka'
          onClick={() => window.scrollTo(0, window.innerHeight * 0.9)}
          onKeyDown={() => window.scrollTo(0, window.innerHeight * 0.9)}
          role='button'
          tabIndex={0}
        >
          <img alt='sipka' src={sipkaB} />
        </div>
      </div>
    </div>
  );
};

export default Uvod;

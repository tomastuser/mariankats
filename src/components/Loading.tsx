import React, { useState, useEffect } from 'react';
import kruh from '../public/kruhO.png';

const Loading = () => {
  const [msgVisible, setMsgVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMsgVisible(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='loading'>
      <img className='loadingKruh' alt='loading' src={kruh} />
      <div
        className='loadingMsg'
        style={{ opacity: msgVisible ? '100%' : '0%' }}
      >
        <h3>NAHRÁVÁNÍ může trvat</h3>
        <h3>až 15 vteřin, omlouváme se.</h3>
      </div>
    </div>
  );
};

export default Loading;

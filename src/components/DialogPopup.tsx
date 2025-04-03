import React, { useContext, useEffect, useRef, useState } from 'react';
import { dbContext } from '../utils/dbContext';

const DialogPopup = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { stranky } = useContext(dbContext);
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    const foundContent = stranky?.find(
      (stranka) => stranka.Nazev === 'Vyskakovaci okno'
    );
    if (foundContent && foundContent.Text && foundContent.Text.length > 0) {
      setContent(foundContent.Text);
      setTimeout(() => {
        dialogRef.current?.showModal();
      }, 1000);
    }
  }, [stranky]);

  return (
    <dialog ref={dialogRef}>
      <div
        dangerouslySetInnerHTML={{
          __html: content || '',
        }}
      />
      <button
        className='aktualitaButton button'
        onClick={() => dialogRef.current?.close()}
        style={{
          display: 'block',
          margin: 'auto',
          marginTop: '48px',
          width: '300px',
        }}
        type='button'
      >
        Zavřít
      </button>
    </dialog>
  );
};

export default DialogPopup;

import React, { useContext } from 'react';
import { dbContext } from '../utils/dbContext';
import { parseImagesFromHTML } from '../utils/parseImagesFromHTML';
import FotoCont from './FotoCont';

const ContentImportSmall = ({ nazev }: { nazev: string }) => {
  const { stranky } = useContext(dbContext);
  const foundStranka = stranky?.find((stranka) => stranka.Nazev === nazev);
  const imageRegexp = /\*\*\*img\*\*\*=(.+?\.(?:jpg|jpeg))/;
  const foundImgStringMatch = foundStranka?.Text.match(imageRegexp);

  return (
    <>
      {foundStranka && (
        <div
          dangerouslySetInnerHTML={{
            __html: parseImagesFromHTML(
              foundStranka.Text.replace(imageRegexp, '')
            ),
          }}
          key={foundStranka.Nazev}
        />
      )}
      {foundImgStringMatch && (
        <FotoCont
          name={foundImgStringMatch[1]}
          alt={foundStranka?.Nazev || ''}
        />
      )}
    </>
  );
};

export default ContentImportSmall;

export const parseImagesFromHTML = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const hrefs = doc.querySelectorAll('a');
    hrefs.forEach((href) => {
      if (href.href.endsWith('.png') || href.href.endsWith('.jpg')) {
        const newImage = document.createElement('div');
        newImage.classList.add('fotoCont');
        newImage.innerHTML = `<div class='fotoContImg'>
              <img src="${href.href}" />
            </div>`;
        href.insertAdjacentElement('afterend', newImage);
        href.remove();
      }
    });
    return doc.body.innerHTML;
  };
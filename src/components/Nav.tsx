import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import caraNavR from '../public/caraNavR.png';
import mariLogo from '../public/mariLogo.png';
import logoNapis from '../public/logo.png';
// import { aktuality, clenove, sponzori, stranky } from '../mockedData';

function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    {
      name: 'O nás',
      path: '/onas',
      id: '1',
      subNavLinks: [
        {
          name: 'O Mariánce',
          path: '/onas/omariance',
        },
        {
          name: 'Zázemí',
          path: '/onas/zazemi',
        },
        {
          name: 'Náš tým',
          path: '/onas/nastym',
        },
        {
          name: 'Program',
          path: '/onas/program',
        },
        {
          name: 'Projekty',
          path: '/onas/projekty',
        },
        {
          name: 'Podporují nás',
          path: '/onas/sponzori',
        },
        {
          name: 'Dokumenty',
          path: '/onas/dokumenty',
        },
        {
          name: 'Nabídka spolupráce',
          path: '/onas/nabidkaspoluprace',
        },
      ],
    },
    {
      name: 'Praktické informace',
      path: '/info',
      id: '2',
      subNavLinks: [
        {
          name: 'Zápis',
          path: '/info/zapis',
        },
        {
          name: 'Ceník a stravování',
          path: '/info/cenik',
        },
        {
          name: 'Co s sebou',
          path: '/info/cossebou',
        },
        {
          name: 'Naše pravidla',
          path: '/info/nasepravidla',
        },
        {
          name: 'Jak se žije v lesní školce',
          path: '/info/jaksezije',
        },
        {
          name: 'Tipy pro rodiče',
          path: '/info/tipyprorodice',
        },
      ],
    },
    {
      name: 'Aktuality',
      path: '/aktuality',
      id: '3',
      subNavLinks: [],
    },
    {
      name: 'Aktivity Kavylu',
      path: '/kavyl',
      id: '4',
      open: false,
      subNavLinks: [
        {
          name: 'Obecně',
          path: '/kavyl',
        },
        {
          name: 'Kroužky',
          path: '/kavyl/krouzky',
        },
        {
          name: 'Tábory',
          path: '/kavyl/tabory',
        },
        {
          name: 'Ekocentrum Jezerka',
          path: '/kavyl/ekocentrum',
        },
        {
          name: 'Další akce',
          path: '/kavyl/dalsiakce',
        },
      ],
    },
    {
      name: 'Kontakt',
      path: '/kontakt',
      id: '5',
      subNavLinks: [],
    },
  ];

  const [subNavLinksOpen, setSubNavLinksOpen] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const subNavOpeningHandler = (
    e:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.KeyboardEvent<HTMLAnchorElement>
  ) => {
    const subs = [...subNavLinksOpen];
    const currentId = Number(e.currentTarget.id) - 1;
    if (window.innerWidth < 768) {
      subs[currentId] = !subs[currentId];
    }
    setSubNavLinksOpen(subs);
  };
  // const up = async () => {
  //   for (let i = 0; i < aktuality.length; i++) {
  //     const response = await fetch(
  //       'http://new.lesnimarianka.cz/api/aktuality',
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           data: {
  //             Nazev: aktuality[i].Nazev,
  //             Text: aktuality[i].Text,
  //             ImageUrl: aktuality[i].Image?.url,
  //           },
  //         }),
  //       }
  //     );
  //     console.log(response);
  //   }
  //   for (let i = 0; i < clenove.length; i++) {
  //     const response = await fetch(
  //       'http://new.lesnimarianka.cz/api/tym-clenove',
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           data: {
  //             Jmeno: clenove[i].Jmeno,
  //             Popis: clenove[i].Popis,
  //             Pozice: clenove[i].Pozice,
  //             ImageUrl: clenove[i].Image?.url,
  //           },
  //         }),
  //       }
  //     );
  //     console.log(response);
  //   }
  //   for (let i = 0; i < sponzori.length; i++) {
  //     const response = await fetch('http://new.lesnimarianka.cz/api/sponzori', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         data: {
  //           Nazev: sponzori[i].Nazev,
  //           Popis: sponzori[i].Popis,
  //           Poradi: sponzori[i].Poradi,
  //           Vyska: sponzori[i].Vyska,
  //           Okraj: sponzori[i].Okraj,
  //           Odkaz: sponzori[i].Odkaz,
  //           ImageUrl: sponzori[i].Image?.url,
  //         },
  //       }),
  //     });
  //     console.log(response);
  //   }
  //   for (let i = 0; i < stranky.length; i++) {
  //     const response = await fetch('http://new.lesnimarianka.cz/api/stranky', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         data: {
  //           Nazev: stranky[i].Nazev,
  //           Text: stranky[i].Text,
  //         },
  //       }),
  //     });
  //     console.log(response);
  //   }
  // };
  return (
    <div>
      <div className='nav'>
        <div
          className={navOpen ? 'sideNavSpacerActive' : 'sideNavSpacer'}
          onClick={() => setNavOpen(false)}
          onKeyDown={() => setNavOpen(false)}
          role='presentation'
        />
        <div className='spacer' />
        <div
          onClick={() => setNavOpen(false)}
          onKeyDown={() => setNavOpen(false)}
          role='presentation'
        >
          <Link to='/'>
            <div
              className='logo'
              // onClick={up}
            >
              <div className='logoCont'>
                <img src={mariLogo} alt='mariLogo' />
              </div>
              <div className='logoText'>
                <img src={logoNapis} alt='logoNapis' />
                {/* <h4>Lesní mateřská škola v Brně-Líšni</h4> */}
              </div>
            </div>
          </Link>
        </div>
        <div
          className={
            navOpen ? 'navLinks sideNavActive sideNavSpacer' : 'navLinks'
          }
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                {window.innerWidth < 768 ? (
                  link.subNavLinks.length > 0 ? (
                    <a
                      className='navLink pointer'
                      onClick={subNavOpeningHandler}
                      onKeyDown={subNavOpeningHandler}
                      id={link.id}
                      role='link'
                      tabIndex={0}
                    >
                      <p>{link.name}</p>
                    </a>
                  ) : (
                    <NavLink
                      activeClassName='navLinkActive'
                      className='navLink'
                      to={link.path}
                      id={link.id}
                    >
                      <p>{link.name}</p>
                    </NavLink>
                  )
                ) : (
                  <NavLink
                    activeClassName='navLinkActive'
                    className='navLink'
                    to={link.path}
                    id={link.id}
                  >
                    <p>{link.name}</p>
                  </NavLink>
                )}
                <ul className='subNav'>
                  {link.subNavLinks.map((subLink) =>
                    subLink.name === 'Obecně' ? (
                      window.innerWidth < 769 && (
                        <li
                          key={subLink.name}
                          className={
                            window.innerWidth < 769
                              ? subNavLinksOpen[Number(link.id) - 1]
                                ? 'subNavLi subNavActive'
                                : 'subNavLi'
                              : 'subNavLi'
                          }
                        >
                          <NavLink
                            className='navLink'
                            activeClassName='navLinkActive'
                            to={{ pathname: subLink.path }}
                          >
                            <p>{subLink.name}</p>
                          </NavLink>
                        </li>
                      )
                    ) : (
                      <li
                        key={subLink.name}
                        className={
                          window.innerWidth < 768
                            ? subNavLinksOpen[Number(link.id) - 1]
                              ? 'subNavLi subNavActive'
                              : 'subNavLi'
                            : 'subNavLi'
                        }
                      >
                        <NavLink
                          className='navLink'
                          activeClassName='navLinkActive'
                          to={{ pathname: subLink.path }}
                        >
                          <p>{subLink.name}</p>
                        </NavLink>
                      </li>
                    )
                  )}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className='burger-container'>
          <div
            className='burger'
            onClick={() => setNavOpen(!navOpen)}
            onKeyDown={() => setNavOpen(!navOpen)}
            role='button'
            tabIndex={0}
          >
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div>
        </div>
        <img src={caraNavR} alt='caraNav' className='caraNav' />
      </div>
      <div className='navSpacerAtTheTop' />
    </div>
  );
}

export default Nav;

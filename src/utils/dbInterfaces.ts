interface AktualitaIF {
  Nazev: string;
  id: string;
  Image: { url: string };
  Text: string;
}
interface ClenIF {
  Jmeno: string;
  Pozice: string;
  Image: { url: string };
  Popis: string;
  Poradi: number;
  id: string;
}
interface StrankaIF {
  Nazev: string;
  Text: string;
}
interface SponzorIF {
  Nazev: string;
  Vyska: string;
  Image: { url: string };
  Odkaz: string;
  Poradi: number;
  Okraj: number;
  id: string;
}

export { AktualitaIF, ClenIF, StrankaIF, SponzorIF };

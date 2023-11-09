interface AktualitaIF {
  Nazev: string;
  id: number;
  Image: { data: { attributes: { url: string } } } | null;
  ImageUrl: string;
  Text: string;
}
interface ClenIF {
  Jmeno: string;
  Pozice: string;
  Image: { data: { attributes: { url: string } } } | null;
  Popis: string;
  ImageUrl: string;
  Poradi: number;
  id: number;
}
interface StrankaIF {
  Nazev: string;
  Text: string;
  id: number;
}
interface SponzorIF {
  Nazev: string;
  Vyska: string | null;
  Image: { data: { attributes: { url: string } } } | null;
  Odkaz: string;
  Poradi: number;
  ImageUrl: string;
  Okraj: number | null;
  id: number;
  Popis: string | null;
}

export { AktualitaIF, ClenIF, StrankaIF, SponzorIF };

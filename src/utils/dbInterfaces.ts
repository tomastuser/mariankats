export interface AktualitaIF {
  Nazev: string;
  id: number;
  Image: { data: { attributes: { url: string } } } | null;
  ImageUrl: string;
  Text: string;
}
export interface ClenIF {
  Jmeno: string;
  Pozice: string;
  Image: { data: { attributes: { url: string } } } | null;
  Popis: string;
  ImageUrl: string;
  Poradi: number;
  id: number;
}
export interface StrankaIF {
  Nazev: string;
  Text: string;
  id: number;
}
export interface SponzorIF {
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

interface AktualitaIF {
  Nazev: string;
  id: number;
  Image: { url: string } | null;
  Text: string;
}
interface ClenIF {
  Jmeno: string;
  Pozice: string;
  Image: { url: string } | null;
  Popis: string;
  // Poradi: number;
  id: number;
}
interface StrankaIF {
  Nazev: string;
  Text: string;
}
interface SponzorIF {
  Nazev: string;
  Vyska: string | null;
  Image: { url: string } | null;
  Odkaz: string;
  Poradi: number;
  Okraj: number | null;
  id: number;
  Popis: string | null;
}

export { AktualitaIF, ClenIF, StrankaIF, SponzorIF };

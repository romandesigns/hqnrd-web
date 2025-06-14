export interface CategoryInterface {
  label: string;
  units: number[];
  btnCTA: string;
  slug: string;
  Icon: IconType;
  maxGuestsPerUnit: number;
  totalUnits: number;
  bgImage: string;
  details: { units: number; maxPerUnit: number }[];
}
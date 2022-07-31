import { ECategories } from './statics/ECategories';

export interface ISong {
  artist: string;
  title: string;
  minutes: number;
  seconds: number;
  size: number;
  image: string;
}

export interface ICategories {
  [ECategories.Jazz]: ISong[];
  [ECategories.Rock]: ISong[];
  [ECategories.Country]: ISong[];
  [ECategories.Pop]: ISong[];
}

export class ObjectsModel {
  id: number;
  name: string;
  mainImage: string;
  rooms: number;
  bathrooms: number;
  area: number;
  terace: number;
  images: Image[];
  type: number;
  shortDescription?: string;
  description?: string;
  price?: number;
  equipment: Equipment[];
  buildingType?: 'brvnara'|'spratna'|'prizemna';
}

export interface Image {
  medium: string;
}
export interface Equipment {
  name: string;
}

export interface Education {
  dateIn: Date;
  dateOut: Date;
  diploma: string;
  extra?: string;
  image: string;
  name: string;
  place: string;
  shortDescription: string;
  website: string;
}

export interface Interest {
  name: string;
}

export interface Skill {
  label: string;
}

export interface Travel {
  coordinates: { latitude: number; longitude: number };
  place: string;
}

export interface Work {
  name: string;
}
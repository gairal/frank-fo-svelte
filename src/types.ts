export interface Education {
  dateIn: string;
  dateOut: string;
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
  accomplishments: string;
  dateIn: string;
  dateOut?: string;
  description: string;
  image: string;
  name: string;
  // @todo: remove
  // order: number;
  place: string;
  title: string;
  website: string;
}

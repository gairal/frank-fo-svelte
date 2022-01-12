import type { Education } from "../../src/types";

export const educationsFixture = (): Education[] => [
  {
    dateIn: "2005-08-31T22:00:00.000Z",
    dateOut: "2008-07-01T15:11:52.978Z",
    diploma:
      "Master in engineering specialized in Information Technology - Option software engineering",
    extra:
      "Tutored mathematics to middle school students (14 yrs) with the association EAH (EFREI's humanitarian association).",
    image: "efrei.png",
    name: "Efrei",
    place: "Villejuif",
    shortDescription: "Engineering school of IT and management",
    website: "http://www.efrei.fr",
  },
  {
    dateIn: "2003-09-02T15:11:12.884Z",
    dateOut: "2005-07-01T15:11:52.978Z",
    diploma:
      "BTS (Two-year university degree in Information Technology and Management) - Option application developer",
    image: "enc.jpg",
    name: "ENC",
    place: "Paris 17th",
    shortDescription: "National School of Business",
    website: "http://www.enc-bessieres.org",
  },
  {
    dateIn: "2000-09-02T15:11:12.884Z",
    dateOut: "2001-07-01T15:11:52.978Z",
    diploma:
      "Baccalauréat S (High-school degree specialized in Science) with distinction",
    image: "spf.png",
    name: "Saint-Pierre Fourier",
    place: "Paris 12th",
    shortDescription: "High school",
    website: "http://www.spfparis12.fr",
  },
];

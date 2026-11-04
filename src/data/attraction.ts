// Shared single-attraction entity for every page in the guide cluster.
// Values mirror the homepage binding in src/pages/index.astro so the whole
// site keeps one consistent entity, address, coordinate and source set.

export const attraction = {
  domain: 'dehradunzoo.com',
  fullName: 'Dehradun Zoo',
  shortName: 'Malsi Deer Park',
  legacyName: 'Malsi Deer Park',
  hindiName: 'देहरादून जू',
  hindiLegacyName: 'मालसी डियर पार्क',
  city: 'Dehradun',
  state: 'Uttarakhand',
  country: 'India',
  countryCode: 'IN',
  postalCode: '248009',
  streetAddress: 'Diversion, Mussoorie Road, Malsi',
  latitude: 30.3900817,
  longitude: 78.0752725,
  plusCode: '93RG+24',
  phone: '+919027174404',
  phoneDisplay: '+91 90271 74404',
  category: 'Zoo / wildlife park',
  ratingValue: '4.2',
  reviewCount: '21742',
  nearbyLandmarks: ["Robber's Cave (Gucchhu Pani)", 'MDDA Park / Rajpur Road', 'Forest Research Institute']
};

export const siteOrigin = 'https://dehradunzoo.com';
export const canonicalHome = `${siteOrigin}/`;
export const abs = (path: string) => new URL(path, `${siteOrigin}/`).toString();

export const mapUrl = 'https://maps.app.goo.gl/Egak7AZJp3zzA7s88';
export const mapEmbedSrc = 'https://www.google.com/maps?q=30.3900817,78.0752725&output=embed';

// Authoritative outbound references (E-E-A-T + local citation signals).
export const sources = {
  gov: 'https://nndehradun.uk.gov.in/places-centres/malsi-deer-park/',
  tourism: 'https://uttarakhandtourism.gov.in/',
  forest: 'https://forest.uk.gov.in/',
  cza: 'https://cza.nic.in/uploads/documents/zoos/zoo-status/hindi/267.pdf',
  incredibleIndia: 'https://www.incredibleindia.org/content/incredible-india-v2/en/destinations/dehradun/malsi-deer-park.html',
  maps: mapUrl
};

export const photos = {
  hero: '/images/malsi-spotted-deer.jpg',
  deer: '/images/malsi-spotted-deer.jpg',
  monkey: '/images/malsi-rhesus-macaque.jpg'
};

// The single dated facts the whole cluster is allowed to treat as verified.
export const verified = {
  mapsSnapshotDate: '29 October 2026',
  mapsOpeningSignal: '09:00',
  distanceFromClockTowerKm: 9,
  areaHectares: 25,
  czaLetterDate: '16 July 2026',
  czaRenewalTo: '16 July 2028'
};

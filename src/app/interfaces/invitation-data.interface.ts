export interface Person {
  name: string;
  phone: string;
}

export interface Couple {
  person1: Person;
  person2: Person;
}

export interface InvitationTexts {
  coverTitle: string;
  coverSubtitle: string;
  weddingDateText: string;
  galleryQuote: string;
  rsvpTitle: string;
  rsvpTitle2: string;
  rsvpBackground?: string;
  rsvpWhatsappMessage: string;
  accommodationTitle: string;
  accommodationSubtitle: string;
  socialTitle: string;
  thankYouText: string;
  thankYouText2: string;
}

export interface InvitationSeparators {
  complexQuote: string;
  complexQuoteBackground?: string;
  afterCover: string;
  beforeCeremony: string;
  beforeReception: string;
  beforeTimeline: string;
  beforeGallery: string;
}

export interface Venue {
  type: 'ceremony' | 'reception' | string;
  title: string;
  name: string;
  location?: string;
  time: string;
  mapsUrl: string;
}

export interface TimelineEvent {
  time: string;
  label: string;
  iconPath: string;
}

export interface Accommodation {
  hotelsUrl: string;
  ruralUrl: string;
}

export interface Social {
  hashtag: string;
  instagramUrl: string;
}

export interface BlocksConfig {
  portada: boolean;
  separadorCita: boolean;
  portada2: boolean;
  iglesia: boolean;
  ceremonia: boolean;
  timeline: boolean;
  galeria: boolean;
  rsvp: boolean;
  hoteles: boolean;
  redes: boolean;
  agradecimientos: boolean;
  countdown: boolean;
}

export interface WelcomeData {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export interface EventVenue {
  name: string;
  address: string;
  mapsUrl: string;
}

export interface InvitationData {
  type: string;
  couple: Couple;
  countdownDate: string;
  eventVenue?: EventVenue;
  music: string;
  babyName?: string;
  coverImage: string;
  coverBackground: string;
  thanksBackground: string;
  blocks: BlocksConfig;
  welcome?: WelcomeData;
  texts: InvitationTexts;
  separators: InvitationSeparators;
  venues: Venue[];
  timeline: TimelineEvent[];
  gallery: string[];
  accommodation: Accommodation;
  social: Social;
}

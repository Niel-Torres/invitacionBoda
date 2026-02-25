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
  rsvpWhatsappMessage: string;
  accommodationTitle: string;
  accommodationSubtitle: string;
  socialTitle: string;
  thankYouText: string;
}

export interface InvitationSeparators {
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

export interface InvitationData {
  type: string;
  couple: Couple;
  countdownDate: string;
  music: string;
  coverImage: string;
  texts: InvitationTexts;
  separators: InvitationSeparators;
  venues: Venue[];
  timeline: TimelineEvent[];
  gallery: string[];
  accommodation: Accommodation;
  social: Social;
}

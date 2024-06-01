export type Link = {
  title: string;
  title_jp: string;
  url: string;
};

export type LinksData = {
  links: Link[];
};

export type PossibleLanguages = 'en' | '日本語';
export type PossibleScrollDirections = 'up' | 'down';

export interface CarouselProps {
  items: CarouselJSONItem[];
}

export interface CarouselJSONItem {
  title: string;
  linkName: string;
  imageLarge: string;
  imageTablet: string;
  imageDefault: string;
}

export interface CarouselItemProps extends CarouselJSONItem {
  keyString: string;
}

export interface Highlight {
  title: string;
  url: string;
  imageURL: string;
  description: string;
  description_japanese: string;
}

export interface HighlightsProps {
  highlights: Highlight[];
}

export interface WhoWeAreHeader {
  body: string;
  body_jpn: string;
  lead: string;
  lead_jpn: string;
}

export interface WhoWeAreCard {
  header: string;
  header_jpn: string;
  lead: string;
  lead_jpn: string;
  imageURL: string;
}

export interface WhoWeAreProps {
  data: {
    header: WhoWeAreHeader;
    cards: WhoWeAreCard[];
  };
}

export type Link = {
  title: string;
  title_jp: string;
  url: string;
};

export type LinksData = {
  links: Link[];
};

export type PossibleLanguages = 'en' | 'jpn';
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

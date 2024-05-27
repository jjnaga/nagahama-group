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

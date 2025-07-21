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
  linkURL: string;
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

export interface NetworkRegion {
  name: string;
  key: Regions;
  active: boolean;
}

export interface Company {
  name: string;
  description?: string;
  location: string;
  contact: string;
}

export type Regions = 'default' | 'north_america' | 'asia' | 'europe';

export type RegionLocations = {
  [key in Regions]: {
    region: string;
    locations: Company[];
  };
};

export interface NetworkProps {
  body: {
    lead: string;
    lead_jpn: string;
  };
  mapURL: string;
  regions: NetworkRegion[];
  network: RegionLocations;
}

export interface Executives {
  executives: ExecutiveInfo[];
  directors: DirectorInfo[];
}

export interface ExecutiveInfo {
  name: string;
  title: string;
  duties?: string[];
  picture: string;
}

export interface DirectorInfo {
  name: string;
  title: string;
  duties: string[];
}

export type EarningsRelease = {
  title: string;
  date: string;
  dateJapanese: string;
  year: string;
  quarter: string;
  summary: string;
  summaryJapanese: string;
  data?: EarningsData;
};

export type EarningsData = {
  revenue: {
    total: number;
    byProduct: {
      [key: string]: number;
    };
    byRegion: {
      [key: string]: number;
    };
  };
  expenses: {
    total: number;
    byRegion: {
      [key: string]: number;
    };
  };
  netIncome: number;
  grossProfit: number;
  operatingIncome: number;
  earnings: {
    eps: number; // Earnings per share
    ebitda: number; // Earnings before interest, taxes, depreciation, and amortization
  };
  cashFlow: {
    operating: number;
    investing: number;
    financing: number;
    freeCashFlow: number;
  };
  balanceSheet: {
    totalAssets: number;
    totalLiabilities: number;
    shareholdersEquity: number;
    cash: number;
  };
  keyMetrics: {
    grossMargin: number; // percentage
    operatingMargin: number; // percentage
    netMargin: number; // percentage
    returnOnEquity: number; // percentage
  };
};

// Type for earnings release with key
export type EarningsReleaseWithKey = EarningsRelease & { key: string };

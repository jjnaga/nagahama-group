import { NetworkProps } from 'types/types';

const data: NetworkProps = {
  body: {
    lead: 'Nagahama Group is a global conglomerate, with a primary focus on the North America and Asia. With leading companies in technology, water, and housing, our global network encompases 3 regions.',
    lead_jpn:
      '長濱グループは、アメリカとアジアを中心としたグローバルコングロマリットです。私たちのグローバルネットワークは3つの地域で構成されています。',
  },
  mapURL: 'map.png',
  regions: [
    {
      name: 'North America',
      key: 'north_america',
      active: true,
    },
    {
      name: 'Asia',
      key: 'asia',
      active: true,
    },
    {
      name: 'Europe',
      key: 'europe',
      active: false,
    },
  ],
  network: {
    default: {
      region: 'Head Office',
      locations: [
        {
          name: 'Head Office',
          location: '〒160-0022 Tokyo, Shinjuku City, Shinjuku 3-1-1, Japan',
          contact: '+81-3-2221-8081',
        },
        {
          name: 'North America Head Office',
          location: '55 Merchant St, Honolulu, HI 96813',
          contact: '+1 (413) 659-6818',
        },
      ],
    },
    north_america: {
      region: 'North America',
      locations: [
        {
          name: 'North America Head Office',
          location: '55 Merchant St Suite #6000, Honolulu, HI 96813',
          contact: '+1 (413) 659-6818',
        },
        {
          name: 'JDM Land',
          description: 'Hospitality and Entertainment, Hawaii Divison',
          location: '1039 S King St, Honolulu, HI 96814',
          contact: '+1 (413) 659-6818',
        },
        {
          name: 'Nagahama Water',
          description:
            'Water Distribution and Treatment, California and Nevada',
          location: '515 Flower St Floor 90, Los Angeles, CA 90071',
          contact: '+1 (413) 659-6818',
        },
        {
          name: 'Naga Construction Hawaii',
          description:
            'Construction of resident buildings and state infrastructure, Hawaii Division',
          location: '636 Laumaka St, Honolulu, HI 96819',
          contact: '+1 (413) 659-6818',
        },
        {
          name: 'Naga Construction West',
          description:
            'Construction of resident buildings and state infrastructure, West Coast Division',
          location: '2609 Bass Ct, Sacramento, CA 95826',
          contact: '+1 (413) 659-6818',
        },
      ],
    },
    asia: {
      region: 'Asia',
      locations: [
        {
          name: 'Head Office',
          location: '〒160-0022 Tokyo, Shinjuku City, Shinjuku 3-1-1, Japan',
          contact: '+81322218082',
        },
        {
          name: 'Nagahama Kansai Region',
          location:
            '〒 540-6131 Twin 21MID Tower 31F, 2-1-61 Shiromi, Chuo-ku, Osaka',
          contact: '+81414591000',
        },
        {
          name: 'Nagahama Hokkaido Region',
          location:
            '3-chōme-10-9 Asabuchō, Kita Ward, Sapporo, Hokkaido 001-0045, Japan',
          contact: '+81117172122',
        },
        {
          name: 'Hong Kong Division',
          location: '271 Lockhart Rd, Wan Chai, Hong Kong',
          contact: '+85234288624',
        },
        {
          name: 'Korea Division',
          description:
            'Development, manufacturing and sales of clothing and cosmetics',
          location:
            'South Korea, Seoul, Jung District, Eulji-ro, 30 롯데호텔서울 Main Tower 90층',
          contact: '+82277110001',
        },
      ],
    },
    europe: {
      region: 'Europe',
      locations: [
        {
          name: 'Nagahama Financial Holdings',
          location:
            'Unit 11, Thames Gateway Park, Choats Rd, Dagenham RM9 6RH, United Kingdom',
          contact: '+442075400011',
        },
      ],
    },
  },
};

export default data;

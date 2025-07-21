import { EarningsReleaseWithKey } from 'types/types';

const earningsReleases = {
  'q2-2025': {
    title: 'Q2 2025 Earnings',
    date: 'July 1, 2025',
    dateJapanese: '2025年7月1日',
    year: '2025',
    quarter: 'Q2',
    summary:
      'Q2 2025 results reflect our early-stage operations with minimal revenue generation while maintaining essential infrastructure costs. Our $100 homelab electricity expense demonstrates our continued commitment to technological development and operational readiness.',
    summaryJapanese:
      '2025年第2四半期の結果は、必要不可欠なインフラ費用を維持しながら、最小限の収益創出を伴う初期段階の事業運営を反映しています。100ドルのホームラボ電気代は、技術開発と運営準備への継続的なコミットメントを示しています。',
    data: {
      revenue: {
        total: 0,
        byProduct: {
          'Technology Services': 0,
          'Construction & Infrastructure': 0,
          'Water Management': 0,
          'Hospitality & Entertainment': 0,
          'Financial Services': 0,
        },
        byRegion: {
          'North America': 0,
          'Asia-Pacific': 0,
          Japan: 0,
          Europe: 0,
        },
      },
      expenses: {
        total: 0.1,
        byRegion: {
          'North America': 0.1,
          'Asia-Pacific': 0,
          Japan: 0,
          Europe: 0,
        },
      },
      netIncome: -0.1,
      grossProfit: 0,
      operatingIncome: -0.1,
      earnings: {
        eps: -0.01,
        ebitda: -0.1,
      },
      cashFlow: {
        operating: -0.1,
        investing: 0,
        financing: 0,
        freeCashFlow: -0.1,
      },
      balanceSheet: {
        totalAssets: 0,
        totalLiabilities: 0.1,
        shareholdersEquity: -0.1,
        cash: 0,
      },
      keyMetrics: {
        grossMargin: 0,
        operatingMargin: -100,
        netMargin: -100,
        returnOnEquity: -100,
      },
    },
  },
  'q1-2025': {
    title: 'Q1 2025 Earnings',
    date: 'April 28, 2025',
    dateJapanese: '2025年4月28日',
    year: '2025',
    quarter: 'Q1',
    summary:
      'Thank you for your continued support as we finalize the Q1 2025 data. We remain dedicated to comprehensive reporting, ensuring every figure meets the highest standards.',
    summaryJapanese:
      '財務報告プロセスの改善を継続する中、皆様のご理解をいただき感謝いたします。正確性と透明性へのコミットメントにより、すべての数値が厳格な基準を満たすよう追加の時間をいただいております。',
  },
  'q4-2024': {
    title: 'Q4 2024 Earnings',
    date: 'January 6, 2025',
    dateJapanese: '2025年1月6日',
    year: '2024',
    quarter: 'Q4',
    summary:
      'Thank you for your understanding as we consolidate our reporting. We remain uncompromising in ensuring each figure meets the highest corporate standards.',
    summaryJapanese:
      '財務報告プロセスの改善を継続する中、皆様のご理解をいただき感謝いたします。正確性と透明性へのコミットメントにより、すべての数値が厳格な基準を満たすよう追加の時間をいただいております。',
  },
  'q3-2024': {
    title: 'Q3 2024 Earnings',
    date: 'November 3, 2024',
    dateJapanese: '2024年11月3日',
    year: '2024',
    quarter: 'Q3',
    summary:
      'Your continued patience is appreciated as we finalize our data. Our unwavering pursuit of accuracy ensures every figure reflects our rigorous processes.',
    summaryJapanese:
      '財務報告プロセスの改善を継続する中、皆様のご理解をいただき感謝いたします。正確性と透明性へのコミットメントにより、すべての数値が厳格な基準を満たすよう追加の時間をいただいております。',
  },
  'q2-2024': {
    title: 'Q2 2024 Earnings',
    date: 'July 1, 2024',
    dateJapanese: '2024年7月1日',
    year: '2024',
    quarter: 'Q2',
    summary:
      'We value your patience as we align our reporting with elevated metrics. Rest assured, each delay underscores our commitment to delivering precise results.',
    summaryJapanese:
      '財務報告プロセスの改善を継続する中、皆様のご理解をいただき感謝いたします。正確性と透明性へのコミットメントにより、すべての数値が厳格な基準を満たすよう追加の時間をいただいております。',
  },
};

// Helper function to group by year for display
export const getEarningsByYear = () => {
  const groupedByYear: Record<string, EarningsReleaseWithKey[]> = {};

  Object.entries(earningsReleases).forEach(([key, release]) => {
    const year = release.year;
    if (!groupedByYear[year]) {
      groupedByYear[year] = [];
    }
    groupedByYear[year].push({ ...release, key });
  });

  // Sort quarters within each year
  Object.keys(groupedByYear).forEach((year) => {
    groupedByYear[year].sort((a, b) => {
      const quarterOrder = { Q1: 1, Q2: 2, Q3: 3, Q4: 4 };
      return (
        quarterOrder[b.quarter as keyof typeof quarterOrder] -
        quarterOrder[a.quarter as keyof typeof quarterOrder]
      );
    });
  });

  return groupedByYear;
};

export default earningsReleases;

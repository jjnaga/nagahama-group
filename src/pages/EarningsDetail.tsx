import { useParams } from 'react-router-dom';
import { useAppContext } from 'context/Provider';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import earningsReleases from 'data/earnings';
import { EarningsRelease } from 'types/types';

const EarningsDetail = () => {
  const { slug } = useParams();
  const { headerHeight, language } = useAppContext();
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [earningsData, setEarningsData] = useState<EarningsRelease | null>(
    null
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (slug && earningsReleases[slug as keyof typeof earningsReleases]) {
      setEarningsData(earningsReleases[slug as keyof typeof earningsReleases]);
    } else {
      setEarningsData(null);
    }
  }, [slug]);

  const mainStyle = {
    marginTop: isLargeScreen ? `${headerHeight}px` : '0',
  };

  if (!earningsData) {
    return (
      <main style={mainStyle} className="pt-5 md:pt-10 px-3 md:px-10 lg:px-20">
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold text-gray-600">
            {language === 'en'
              ? 'Earnings Report Not Found'
              : '決算報告が見つかりません'}
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main style={mainStyle} className="pt-5 md:pt-10 px-3 md:px-10 lg:px-20">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-nagahama-blue mb-4">
            {earningsData.title}
          </h1>
          <time className="text-lg text-gray-600">
            {language === 'en' ? earningsData.date : earningsData.dateJapanese}
          </time>
        </header>

        {/* Summary or Coming Soon */}
        <section className="mb-10">
          <div
            className={`rounded-lg shadow-lg p-8 border-l-4 ${
              earningsData.data
                ? 'bg-white border-nagahama-blue'
                : 'bg-gray-50 border-gray-300'
            }`}
          >
            <h2
              className={`text-2xl font-semibold mb-4 ${
                earningsData.data ? 'text-black' : 'text-gray-600'
              }`}
            >
              {earningsData.data
                ? language === 'en'
                  ? 'Executive Summary'
                  : 'エグゼクティブサマリー'
                : language === 'en'
                  ? 'Report Coming Soon'
                  : 'レポート準備中'}
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                earningsData.data ? 'text-gray-700' : 'text-gray-600'
              }`}
            >
              {earningsData.data
                ? language === 'en'
                  ? earningsData.summary
                  : earningsData.summaryJapanese
                : language === 'en'
                  ? 'This earnings report is currently being prepared. Please check back later for the full details.'
                  : 'この決算報告書は現在準備中です。詳細については後ほどご確認ください。'}
            </p>
          </div>
        </section>

        {/* Financial Data Sections - Only show if data exists */}
        {earningsData.data && (
          <>
            {/* Key Financial Highlights */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-nagahama-blue">
                {language === 'en'
                  ? 'Key Financial Highlights'
                  : '主要財務ハイライト'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-nagahama-blue"
                >
                  <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                    {language === 'en' ? 'Total Revenue' : '総売上高'}
                  </h3>
                  <p className="text-2xl font-bold text-nagahama-blue mt-2">
                    ${earningsData.data.revenue.total.toLocaleString()}K
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-gray-400"
                >
                  <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                    {language === 'en' ? 'Net Income' : '純利益'}
                  </h3>
                  <p
                    className={`text-2xl font-bold mt-2 ${
                      earningsData.data.netIncome >= 0
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    ${earningsData.data.netIncome.toLocaleString()}K
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-400"
                >
                  <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                    {language === 'en' ? 'EPS' : '1株当たり利益'}
                  </h3>
                  <p
                    className={`text-2xl font-bold mt-2 ${
                      earningsData.data.earnings.eps >= 0
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    ${earningsData.data.earnings.eps.toFixed(2)}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-400"
                >
                  <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                    {language === 'en'
                      ? 'Free Cash Flow'
                      : 'フリーキャッシュフロー'}
                  </h3>
                  <p
                    className={`text-2xl font-bold mt-2 ${
                      earningsData.data.cashFlow.freeCashFlow >= 0
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    ${earningsData.data.cashFlow.freeCashFlow.toLocaleString()}K
                  </p>
                </motion.div>
              </div>
            </section>

            {/* Revenue Breakdown */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-nagahama-blue">
                {language === 'en' ? 'Revenue Breakdown' : '売上内訳'}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* By Product */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">
                    {language === 'en'
                      ? 'By Business Segment'
                      : '事業セグメント別'}
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(earningsData.data.revenue.byProduct).map(
                      ([product, amount]) => (
                        <div
                          key={product}
                          className="flex justify-between items-center py-2 border-b border-gray-100"
                        >
                          <span className="text-gray-700">{product}</span>
                          <span className="font-medium">
                            ${amount.toLocaleString()}K
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </motion.div>

                {/* By Region */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">
                    {language === 'en' ? 'By Geographic Region' : '地域別'}
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(earningsData.data.revenue.byRegion).map(
                      ([region, amount]) => (
                        <div
                          key={region}
                          className="flex justify-between items-center py-2 border-b border-gray-100"
                        >
                          <span className="text-gray-700">{region}</span>
                          <span className="font-medium">
                            ${amount.toLocaleString()}K
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Expenses Breakdown */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-nagahama-blue">
                {language === 'en' ? 'Expenses Breakdown' : '費用内訳'}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* By Region */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">
                    {language === 'en' ? 'By Geographic Region' : '地域別'}
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(earningsData.data.expenses.byRegion).map(
                      ([region, amount]) => (
                        <div
                          key={region}
                          className="flex justify-between items-center py-2 border-b border-gray-100"
                        >
                          <span className="text-gray-700">{region}</span>
                          <span className="font-medium text-red-600">
                            ${amount.toLocaleString()}K
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </motion.div>

                {/* Total Summary */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">
                    {language === 'en' ? 'Total Summary' : '総計'}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-t border-gray-200 pt-2">
                      <span className="text-gray-700 font-medium">
                        {language === 'en' ? 'Total Expenses' : '総費用'}
                      </span>
                      <span className="font-bold text-red-600">
                        ${earningsData.data.expenses.total.toLocaleString()}K
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Financial Performance */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-nagahama-blue">
                {language === 'en' ? 'Financial Performance' : '財務業績'}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Income Statement */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">
                    {language === 'en' ? 'Income Statement' : '損益計算書'}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">
                        {language === 'en' ? 'Total Revenue' : '総売上高'}
                      </span>
                      <span className="font-medium">
                        ${earningsData.data.revenue.total.toLocaleString()}K
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">
                        {language === 'en' ? 'Gross Profit' : '売上総利益'}
                      </span>
                      <span className="font-medium">
                        ${earningsData.data.grossProfit.toLocaleString()}K
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">
                        {language === 'en' ? 'Operating Income' : '営業利益'}
                      </span>
                      <span
                        className={`font-medium ${
                          earningsData.data.operatingIncome >= 0
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        ${earningsData.data.operatingIncome.toLocaleString()}K
                      </span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-2">
                      <span className="text-gray-700 font-medium">
                        {language === 'en' ? 'Net Income' : '純利益'}
                      </span>
                      <span
                        className={`font-bold ${
                          earningsData.data.netIncome >= 0
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        ${earningsData.data.netIncome.toLocaleString()}K
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Cash Flow */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">
                    {language === 'en' ? 'Cash Flow' : 'キャッシュフロー'}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">
                        {language === 'en' ? 'Operating' : '営業活動'}
                      </span>
                      <span
                        className={`font-medium ${
                          earningsData.data.cashFlow.operating >= 0
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        ${earningsData.data.cashFlow.operating.toLocaleString()}
                        K
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">
                        {language === 'en' ? 'Investing' : '投資活動'}
                      </span>
                      <span
                        className={`font-medium ${
                          earningsData.data.cashFlow.investing >= 0
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        ${earningsData.data.cashFlow.investing.toLocaleString()}
                        K
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">
                        {language === 'en' ? 'Financing' : '財務活動'}
                      </span>
                      <span
                        className={`font-medium ${
                          earningsData.data.cashFlow.financing >= 0
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        ${earningsData.data.cashFlow.financing.toLocaleString()}
                        K
                      </span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-2">
                      <span className="text-gray-700 font-medium">
                        {language === 'en'
                          ? 'Free Cash Flow'
                          : 'フリーキャッシュフロー'}
                      </span>
                      <span
                        className={`font-bold ${
                          earningsData.data.cashFlow.freeCashFlow >= 0
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        $
                        {earningsData.data.cashFlow.freeCashFlow.toLocaleString()}
                        K
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Key Metrics */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">
                    {language === 'en' ? 'Key Metrics' : '主要指標'}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">
                        {language === 'en' ? 'Gross Margin' : '売上総利益率'}
                      </span>
                      <span className="font-medium">
                        {earningsData.data.keyMetrics.grossMargin.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">
                        {language === 'en' ? 'Operating Margin' : '営業利益率'}
                      </span>
                      <span className="font-medium">
                        {earningsData.data.keyMetrics.operatingMargin.toFixed(
                          1
                        )}
                        %
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">
                        {language === 'en' ? 'Net Margin' : '純利益率'}
                      </span>
                      <span className="font-medium">
                        {earningsData.data.keyMetrics.netMargin.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-2">
                      <span className="text-gray-700 font-medium">
                        {language === 'en' ? 'ROE' : '自己資本利益率'}
                      </span>
                      <span
                        className={`font-bold ${
                          earningsData.data.keyMetrics.returnOnEquity >= 0
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        {earningsData.data.keyMetrics.returnOnEquity.toFixed(1)}
                        %
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Balance Sheet Summary */}
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-nagahama-blue">
                {language === 'en' ? 'Balance Sheet Summary' : '貸借対照表概要'}
              </h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
                      {language === 'en' ? 'Total Assets' : '総資産'}
                    </h3>
                    <p className="text-xl font-bold text-nagahama-blue">
                      $
                      {earningsData.data.balanceSheet.totalAssets.toLocaleString()}
                      K
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
                      {language === 'en' ? 'Total Liabilities' : '総負債'}
                    </h3>
                    <p className="text-xl font-bold text-red-600">
                      $
                      {earningsData.data.balanceSheet.totalLiabilities.toLocaleString()}
                      K
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
                      {language === 'en' ? "Shareholders' Equity" : '株主資本'}
                    </h3>
                    <p className="text-xl font-bold text-green-600">
                      $
                      {earningsData.data.balanceSheet.shareholdersEquity.toLocaleString()}
                      K
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
                      {language === 'en'
                        ? 'Cash & Equivalents'
                        : '現金及び現金同等物'}
                    </h3>
                    <p className="text-xl font-bold text-blue-600">
                      ${earningsData.data.balanceSheet.cash.toLocaleString()}K
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>
          </>
        )}

        {/* Back Button */}
        <section className="text-center">
          <button
            onClick={() => window.history.back()}
            className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            {language === 'en' ? '← Back to Earnings' : '← 決算一覧に戻る'}
          </button>
        </section>
      </motion.article>
    </main>
  );
};

export default EarningsDetail;

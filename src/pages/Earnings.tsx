import { useAppContext } from 'context/Provider';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getEarningsByYear } from 'data/earnings';

const Earnings = () => {
  const { headerHeight, language } = useAppContext();
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Determine if in large breakpoint.
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // set margintop to the height of header if largescreen, else set to 0.
  const mainStyle = {
    marginTop: isLargeScreen ? `${headerHeight}px` : '0',
  };

  return (
    <main style={mainStyle} className="pt-5 md:pt-10 px-3 md:px-10 lg:px-20">
      {/* Hero Section */}
      <section className="mb-10 lg:mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-nagahama-blue py-4 lg:py-6 border-y-2 border-y-slate-100">
          {language === 'en'
            ? 'Earnings & Financial Results'
            : '決算・財務情報'}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-8 lg:mt-12">
          {/* Main Content - 2/3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <p className="text-2xl text-gray-700 mb-6">
              {language === 'en'
                ? 'Stay informed with our latest financial performance and quarterly earnings reports.'
                : '最新の財務業績と四半期決算報告をご確認ください。'}
            </p>
            <p className="text-lg text-gray-600">
              {language === 'en'
                ? 'Access comprehensive earnings releases, financial statements, and investor materials. Our commitment to transparency drives our detailed reporting of business performance and strategic initiatives.'
                : '包括的な決算発表、財務諸表、投資家向け資料にアクセスできます。透明性へのコミットメントにより、事業業績と戦略的取り組みの詳細な報告を行っています。'}
            </p>
          </motion.div>

          {/* Stock Ticker Section - 1/3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-nagahama-blue">
              <h3 className="text-lg font-semibold mb-4 text-nagahama-blue">
                {language === 'en' ? 'Stock Information' : '株式情報'}
              </h3>

              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">NASDAQ</span>
                    <span className="text-xs text-gray-400">USD</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">NAGA</span>
                    <span className="text-gray-500">TBD</span>
                  </div>
                </div>

                <div className="border-b border-gray-100 pb-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">
                      {language === 'en'
                        ? 'Tokyo Stock Exchange'
                        : '東京証券取引所'}
                    </span>
                    <span className="text-xs text-gray-400">JPY</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">NG</span>
                    <span className="text-gray-500">TBD</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                {language === 'en' ? 'Public listing anticipated' : '上場予定'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Earnings Feed */}
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-nagahama-blue">
          {language === 'en' ? 'Latest Earnings Releases' : '最新決算発表'}
        </h2>

        {Object.entries(getEarningsByYear())
          .sort(([a], [b]) => Number(b) - Number(a)) // Sort years descending
          .map(([year, releases]) => (
            <div key={year} className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-gray-700 border-b border-gray-200 pb-2">
                {year}
              </h3>
              <div className="space-y-6">
                {releases.map((release, index) => (
                  <motion.article
                    key={release.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: release.data ? 1 : 0.5, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-white rounded-lg shadow-lg transition-shadow duration-300 border-l-4 border-nagahama-blue overflow-hidden ${
                      release.data
                        ? 'hover:shadow-xl cursor-pointer'
                        : 'cursor-default'
                    }`}
                    animate={{ opacity: release.data ? 1 : 0.5 }}
                    onClick={() => {
                      if (release.data) {
                        window.location.href = `/earnings/${release.key}`;
                      }
                    }}
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl md:text-2xl font-semibold text-nagahama-blue">
                          {release.title}
                        </h4>
                        <time className="text-gray-500 text-sm md:text-base">
                          {language === 'en'
                            ? release.date
                            : release.dateJapanese}
                        </time>
                      </div>

                      <p className="text-gray-700 leading-relaxed">
                        {language === 'en'
                          ? release.summary
                          : release.summaryJapanese}
                      </p>

                      <div
                        className={`mt-4 flex items-center font-medium ${
                          release.data ? 'text-nagahama-blue' : 'text-gray-400'
                        }`}
                      >
                        <span>
                          {release.data
                            ? language === 'en'
                              ? 'Read Full Report'
                              : '詳細を読む'
                            : language === 'en'
                              ? 'Report Coming Soon'
                              : 'レポート準備中'}
                        </span>
                        {release.data && (
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
      </section>

      {/* Call to Action */}
      <section className="mt-12 lg:mt-20 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-lg p-6 md:p-8 text-center"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            {language === 'en'
              ? 'Need More Information?'
              : 'さらに詳しい情報が必要ですか？'}
          </h3>
          <p className="text-gray-700 mb-6">
            {language === 'en'
              ? 'Contact our investor relations team for detailed financial reports and analysis.'
              : '詳細な財務報告書と分析については、投資家向け広報チームまでお問い合わせください。'}
          </p>
          <button className="bg-nagahama-blue text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            {language === 'en' ? 'Contact IR Team' : 'IR担当者へ連絡'}
          </button>
        </motion.div>
      </section>
    </main>
  );
};

export default Earnings;

import Script from "next/script";

// Elfsight review widget. In Next.js the recommended way to load a third-party
// script is the <Script> component, which handles loading strategy for us
// instead of manually appending a <script> tag in a useEffect.
const RecommendWidget = () => {
  return (
    <>
      <Script
        src='https://static.elfsight.com/platform/platform.js'
        strategy='lazyOnload'
      />
      <div
        className='elfsight-app-79fc1fbe-1401-496a-a284-7095b78b8956'
        data-elfsight-app-lazy
      ></div>
    </>
  );
};

export default RecommendWidget;

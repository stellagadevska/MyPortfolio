import React, { useEffect } from 'react';

const ElfsightWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.defer = true;
    script.setAttribute('data-use-service-core', '');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="elfsight-app-79fc1fbe-1401-496a-a284-7095b78b8956" data-elfsight-app-lazy></div>
  );
};

export default ElfsightWidget;

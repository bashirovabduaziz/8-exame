import React, { useEffect } from 'react';

const Article = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>Article</div>;
};

export default Article;

import React, { useEffect } from 'react';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>Blog</div>;
};

export default Blog;

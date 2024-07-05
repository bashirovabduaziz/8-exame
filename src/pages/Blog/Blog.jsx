import  { useEffect } from 'react';
import BreadCrumbs from '../../components/BreadCumps/BreadCrumbs';
import Subscribe from '../../components/Subscribe/Subscribe';
import BlogCopm from '../../components/BlogComp/BlogCopm';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>
    <BreadCrumbs />
    <BlogCopm />
    <Subscribe />
  </div>;
};

export default Blog;

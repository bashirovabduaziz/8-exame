// src/hooks/useRouteChange.js
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useRouteChange = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    // Create a timeout to hide the loading spinner after 4 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clean up the timer when the component is unmounted or location changes
    return () => clearTimeout(timer);
  }, [location]);

  return loading;
};

export default useRouteChange;

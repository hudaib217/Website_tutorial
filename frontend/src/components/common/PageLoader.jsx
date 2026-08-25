import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1">
      <div className="h-full bg-gradient-to-r from-primary-600 to-accent-600 animate-loading-bar" />
    </div>
  );
}

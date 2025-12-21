import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageLoader from "./pageLoader";


export default function RouteLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 800);

    return () => clearTimeout(timer);
  }, [location.key]); 

  if (loading) return <PageLoader/> ;

  return <>{children}</>;
}

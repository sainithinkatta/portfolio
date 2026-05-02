import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <p className="text-caption uppercase tracking-[0.18em] text-muted-foreground mb-4">
          Error
        </p>
        <h1 className="text-headline text-foreground">404</h1>
        <p className="mt-4 text-body text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center text-[0.9375rem] font-medium text-accent hover:opacity-80 transition-opacity"
        >
          Return home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

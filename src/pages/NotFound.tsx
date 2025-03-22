
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-background">
      <div className="text-center max-w-md animate-fade-in">
        <div className="inline-flex items-center justify-center size-16 rounded-full bg-primary/5 mb-6">
          <div className="text-3xl font-medium text-primary">404</div>
        </div>
        
        <h1 className="text-2xl font-medium mb-3">Page not found</h1>
        <p className="text-muted-foreground mb-8">
          We couldn't find the page you were looking for. It might have been moved, deleted, or never existed.
        </p>
        
        <Link to="/">
          <Button className="group">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

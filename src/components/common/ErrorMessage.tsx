import React from "react";
import { Button } from "./Button";

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  message, 
  onRetry, 
  className = "" 
}) => {
  return (
    <div className={`text-center py-8 ${className}`}>
      <p className="text-red-600 mb-4">Error: {message}</p>
      {onRetry && (
        <Button onClick={onRetry} variant="outline">
          Try Again
        </Button>
      )}
    </div>
  );
};

export default ErrorMessage;
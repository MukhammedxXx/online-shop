import React from "react";

export function Card({ children, className }) {
  return (
    <div className={`border p-4 rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}

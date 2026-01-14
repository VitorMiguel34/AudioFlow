import React from 'react'
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps{
    enable: boolean,
    children: React.ReactElement,
    redirectPage: string,
}

export default function ProtectedRoute({enable, children, redirectPage="/" }: ProtectedRouteProps) {
  if (!enable) {
    return <Navigate to={redirectPage} replace />;
  }

  return children;
}
import React from "react";
import { AppSidebar } from "@/components/Sidebar";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const AuthenticatedLayout: React.FC = () => {
    const { isAuthenticated } = useAuth();
  
    if (!isAuthenticated) {
      return <Navigate to="/" replace />;
    }
    
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar visible uniquement pour les utilisateurs authentifiés */}
      <AppSidebar />
      <main style={{ flex: 1, padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthenticatedLayout;

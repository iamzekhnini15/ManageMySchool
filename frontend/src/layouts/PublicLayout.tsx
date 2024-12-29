import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";


const PublicLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;

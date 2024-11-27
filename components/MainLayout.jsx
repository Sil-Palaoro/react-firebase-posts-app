import React from 'react';
import AppNav from './AppNav';
import { Outlet } from "react-router-dom";

const MainLayout = ({ user, onSignOut }) => {
  return (
    <div>
      <AppNav user={user} onSignOut={onSignOut} />
      <div className="content">
        <Outlet />
      </div>     
    </div>
  );
};

export default MainLayout;
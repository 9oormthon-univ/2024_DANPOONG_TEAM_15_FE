import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

export const CaregiverRoute = (): React.ReactElement => {
  const accessToken = localStorage.getItem('accessToken');
  const authority = localStorage.getItem('authority');

  return accessToken && authority === 'ROLE_CAREGIVER' ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace />
  );
};

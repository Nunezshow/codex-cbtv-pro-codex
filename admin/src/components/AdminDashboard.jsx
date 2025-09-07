import React from 'react';
import UserManagement from './UserManagement';
import ContentManagement from './ContentManagement';
import Analytics from './Analytics';

export default function AdminDashboard() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <UserManagement />
      <ContentManagement />
      <Analytics />
    </div>
  );
}

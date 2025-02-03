"use client";  // Ensure this is a client-side component

import { ReactNode } from "react";
import { withAdminProtection } from "@/components/withAdminProtection";

function AdminPage({ children }: { children?: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
        <p className="text-lg text-gray-600">
          Welcome, Admin! Here you can manage your website content and users.
        </p>
        <div className="mt-6">
          <ul className="space-y-4">
            <li className="p-4 bg-blue-50 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-blue-800">Manage Users</h3>
              <p className="text-sm text-gray-700">View, edit, or delete user accounts.</p>
            </li>
            <li className="p-4 bg-green-50 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-green-800">Content Management</h3>
              <p className="text-sm text-gray-700">Add, edit, or delete content for the site.</p>
            </li>
            <li className="p-4 bg-yellow-50 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-yellow-800">Settings</h3>
              <p className="text-sm text-gray-700">Configure website settings and preferences.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withAdminProtection(AdminPage);

"use client";  // Ensure this is a client-side component

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

export function withAdminProtection(WrappedComponent: React.ComponentType<{ children?: ReactNode }>) {
  return function AdminProtected(props: any) {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === 'loading') {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      );
    }

    if (!session || session.user.role !== 'admin') {
      router.push('/'); // Redirect non-admin users to the homepage
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}

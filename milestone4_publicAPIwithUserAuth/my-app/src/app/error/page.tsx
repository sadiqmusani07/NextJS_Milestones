'use client';

import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const ErrorPageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <div className="error-container">
      <h1>Authentication Error</h1>
      <p>{error ? `Error: ${error}` : 'An unknown error occurred.'}</p>
      <button
        onClick={() => router.push('/login')}
        className="bg-red-500 text-white px-4 py-2 rounded-md"
      >
        Go to Login
      </button>
    </div>
  );
};

const ErrorPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorPageContent />
    </Suspense>
  );
};

export default ErrorPage;

    
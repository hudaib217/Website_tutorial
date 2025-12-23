import React from 'react';

const Loading = ({ fullScreen = false }) => {
  const Spinner = () => (
    <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary-600 border-r-transparent"></div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Spinner />
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-12">
      <Spinner />
    </div>
  );
};

export default Loading;

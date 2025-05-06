import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  return (
    <div className='text-center'>
      <h2 className='text-3xl font-bold text-gray-900 dark:text-white md:text-4xl'>
        {children}
      </h2>
      <div className='w-24 h-1 mx-auto my-4 bg-primary-600 dark:bg-primary-400 rounded'></div>
    </div>
  );
};

export default SectionHeading;

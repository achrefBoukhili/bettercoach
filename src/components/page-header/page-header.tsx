import React from 'react';

interface Iprops {
  title: string;
  displayFilters?: boolean;
}

const PageHeader: React.FC<Iprops> = ({ title, displayFilters = false }) => {
  return (
    <div className='flex flex-row items-center justify-between w-full mb-9'>
      <h3 className='text-3xl font-semibold'>{title}</h3>
      {
        displayFilters ?
          <div>Filters</div>
        : ''
      }
    </div>
  )
}

export default PageHeader;
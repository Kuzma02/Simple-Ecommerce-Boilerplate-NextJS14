import React from 'react'

const Breadcrumb = ({pageTitle, pagePath}) => {
  return (
<div className='bg-primary py-28 justify-center items-center gap-y-5 flex flex-col h-[300px]'>
    <h2 className='text-7xl text-white font-bold max-sm:text-5xl'>{ pageTitle } </h2>
    <p className='text-3xl text-white max-sm:text-xl'>{ pagePath }</p>
</div>
  )
}

export default Breadcrumb
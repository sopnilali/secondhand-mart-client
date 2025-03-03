import React from 'react'

const SectionTitle = ({title}: {title: string}) => {
  return (
    <div>
      <h2 className='text-3xl text-center py-4'>{title}</h2>
    </div>
  )
}

export default SectionTitle

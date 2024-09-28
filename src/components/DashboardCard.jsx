import React from 'react'

const DashboardCard = ({title,count,button}) => {
  return (
    <div className='w-64 bg-[#E2F4EA] rounded-lg shadow-lg m-5 p-3 '>
      <div className='flex justify-center mb-2 ' >
        <p className='bg-white rounded-full text-[#0D5E20] text-2xl w-9 h-9 font-bold text-center'>{count}</p>
        </div>
      <div className='flex justify-center text-2xl mb-2'>{title}</div>
      <div className='flex justify-center mb-2'>
      <button className='rounded-xl w-28 h-8 bg-[#0D5E20] items-center text-white text-2xl font-normal'>{button}</button>
      </div>
    </div>
  )
}

export default DashboardCard

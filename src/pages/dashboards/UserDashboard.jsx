import React from 'react'
import DashboardCard from '../../components/DashboardCard'
import Sidebar from '../../components/sidebar/Sidebar'

const UserDashboard = () => {
  return (
    <div className='flex justify-evenly ml-[200px]'>
      <Sidebar/>
      <DashboardCard  title={"Total Users"} count={"2"} button={"view"}  />
      <DashboardCard  title={"Total Users"} count={"2"} button={"view"}  />
      <DashboardCard  title={"Total Users"} count={"2"} button={"view"}  />
    </div>
  )
}

export default UserDashboard

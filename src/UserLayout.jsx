import React from 'react'
import { Outlet } from 'react-router-dom'
import UserProfile from './UserProfile'

const UserLayout = () => {
  return (
    <div className='cont'>
      <h1>List of Users</h1>
      {/* <UserProfile/> */}
      <Outlet/>
    </div>
  )
}

export default UserLayout

import ManageProfile from '@/components/modules/profile'
import SHContainer from '@/components/ui/core/SHContainer'
import { getAllUser, getCurrentUser } from '@/services/AuthService';
import { IUser } from '@/types';
import React from 'react'

const ProfilePage = async() => {

      const { data } = await getAllUser();
      const user = await getCurrentUser();
      const currentUserData = data?.find((person: IUser) => person?.email === user?.userEmail)



  return (
    <div>
      <ManageProfile user={currentUserData}/>
    </div>
  )
}

export default ProfilePage

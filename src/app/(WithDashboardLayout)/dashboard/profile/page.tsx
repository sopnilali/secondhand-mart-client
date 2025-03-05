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
      <SHContainer>
      <ManageProfile user={currentUserData}/>
      </SHContainer>
    </div>
  )
}

export default ProfilePage

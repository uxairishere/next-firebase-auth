import { useAuth } from '@/context/AuthUserContext'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/router'
import React from 'react'

const Dashboard = () => {
    const { user, logout } = useAuth()
    const router = useRouter()
  return (
  <div>
    This route is protected
    <button onClick={() => {
                    logout()
                    router.push('/login')
                  }} className='dark:text-red-500'>Sign out!</button>
    </div>
    )
}

export default Dashboard
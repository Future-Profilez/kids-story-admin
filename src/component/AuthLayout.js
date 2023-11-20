import React from 'react'
import Header from './Header'
import UserContextProvider from '../context/UserContextProvider'

export default function AuthLayout({children}) {
  return <>
  <UserContextProvider>


    <Header></Header>
    {children}
  </UserContextProvider>
     </>
}

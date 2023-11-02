import React from 'react'
import Header from './Header'

export default function AuthLayout({children}) {
  return <>
  
    <Header></Header>
    {children}
     </>
}

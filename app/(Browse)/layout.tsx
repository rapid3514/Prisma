import { SidebarProvider } from '@/components/ui/sidebar'
import { RootLayoutProps } from '@/types'
import React from 'react'
import { AppSidebar } from './_components/sidebar/app-sidebar'
import AppNavbar from './_components/navbar/app-navbar'

const Layout = ({children}: RootLayoutProps) => {
  return (
       <SidebarProvider>
      <AppSidebar />
      <main className='w-full h-full'>
        <AppNavbar/>
        {children}
      </main>
    </SidebarProvider>
  )
}

export default Layout
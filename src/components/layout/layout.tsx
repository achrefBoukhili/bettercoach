import type React from 'react'
import Navbar from '../navbar/navbar'
import type { Icategory } from 'types/interfaces'
import { Sidebar, PageHeader } from 'components'

interface Props {
  children: React.ReactNode,
  headerTitle?: string,
  sidebarTitle?: string,
  links?: Icategory[]
}

const Layout: React.FC<Props> = ({ children, headerTitle, sidebarTitle = "Explore", links = [] }) => {
  return (
    <div className="px-6 sm:px-16 2xl:px-0 2xl:w-2/3 mx-auto min-h-[75vh] pb-40">
      <Navbar />
      <div className='flex flex-col md:flex-row'>
        <Sidebar
          title={sidebarTitle}
          links={links}
        />
        <div className='w-full mt-10 md:ml-10 md:mt-0'>
          {
            headerTitle ?
            <PageHeader title={headerTitle} />
            : null
          }
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout;
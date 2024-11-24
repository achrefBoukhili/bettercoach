import Link from 'next/link'
import type React from 'react'
import SearchInput from '../search-input/search-input'
import useNavbar from './navbar.hook'
import NavbarLinks from '../navbar-links'
import { useUserContext } from 'contexts/UserContext'
import {
  UserIcon,
  ShoppingCartIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'



const Navbar: React.FC = () => {
  const { menuExpanded, setMenuExpanded } = useNavbar()
  const { user } = useUserContext()

  return (
    <nav className="flex flex-col items-center justify-between py-4 mb-8 font-semibold sm:py-6 lg:flex-row lg:mb-14">
      <div className="flex justify-between w-full mb-4 lg:w-min lg:mb-0">
        <Link href="/">
          <div className="text-2xl font-semibold sm:text-3xl">Shopping</div>
        </Link>
        <div className="flex lg:hidden">
          <Link href="/cart">
            <div className="relative ">
              <ShoppingCartIcon className="h-7 w-7 sm:w-8 sm:h-8" />
              <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-white bg-black rounded-full -right-1 -top-1">
                0
              </span>
            </div>
          </Link>
          <button onClick={() => setMenuExpanded(!menuExpanded)}>
            <Bars3Icon className="w-8 h-8 ml-3 sm:w-9 sm:h-9" />
          </button>
          <div
            className={`${
              menuExpanded ? 'translate-x-0' : 'translate-x-full'
            } lg:hidden min-w-[14rem] w-2/5 fixed z-50 top-0 right-0 flex flex-col items-start h-full px-5 py-8 text-white transform bg-black transition-all duration-[600ms]`}
          >
            <button
              className="absolute w-8 h-8 top-3 right-3"
              onClick={() => setMenuExpanded(false)}
            >
              <XMarkIcon className="w-8 h-8 sm:w-9 sm:h-9" />
            </button>
            <NavbarLinks />
          </div>
        </div>
      </div>

      <SearchInput />

      <div className="flex-row justify-end hidden lg:flex">
        <Link href="/cart">
          <div className="flex flex-row items-center mr-8 cursor-pointer">
            <ShoppingCartIcon className="w-6 h-6" />
            <p className="ml-1 whitespace-nowrap">Cart: 0</p>
          </div>
        </Link>
        <div className="relative flex flex-row items-center group">
          <UserIcon className="w-6 h-6" />
          <p className="mx-1 whitespace-nowrap">
            Hello <span className="font-normal">{user.name}</span>
          </p>
          <ChevronDownIcon className="w-5 h-5 transition-all duration-75 -rotate-90 group-hover:rotate-0" />
          <div className="absolute right-0 z-50 hidden pt-3 top-5 group-hover:flex">
            <div className="flex flex-col items-start py-5 bg-white border rounded-lg shadow-md px-7 whitespace-nowrap">
              <NavbarLinks />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

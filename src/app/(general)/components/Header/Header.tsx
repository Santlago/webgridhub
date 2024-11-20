import { ThemeController } from '@/app/components/ThemeController'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <nav className="navbar bg-base-300 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>
      <Link href="/perfil">
        <Image src='/GridHubLogoBlack.png' width={79} height={70} alt='logo'/>
      </Link>
      <div className='navbar-end'>
        <ThemeController />
      </div>
    </nav>
  )
}

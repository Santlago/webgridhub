import { ThemeController } from '@/app/components/ThemeController'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <nav className="navbar bg-base-300 shadow-lg">
      <Link href="/perfil" className='navbar-start'>
        <Image src='/GridHubLogoBlack.png' width={79} height={70} alt='logo' />
      </Link>
      <div className='navbar-center flex gap-4'>
        <Link href={'/perfil'} className='btn btn-ghost text-lg'>
          Campanha de Investimento
        </Link>
        <Link href={'/perfil'} className='btn btn-ghost text-lg'>
          Espaços Alugáveis
        </Link>
        <Link href={'/perfil'} className='btn btn-ghost text-lg'>
          Meus espaços
        </Link>
        <Link href={'/perfil'} className='btn btn-ghost text-lg'>
          Minhas microgrids
        </Link>
        <Link href={'/perfil'} className='btn btn-ghost text-lg'>
          Perfil do Usuário
        </Link>
      </div>
      <div>
      </div>
      <div className='navbar-end'>
        <ThemeController />
      </div>
    </nav>
  )
}

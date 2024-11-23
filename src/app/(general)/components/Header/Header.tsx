import { ThemeController } from '@/app/components/ThemeController'
import Link from 'next/link'
import Logo from '/public/GridHubLogo.svg'

export function Header() {
  return (
    <nav className="navbar bg-base-300 shadow-lg px-4">
      <div className="navbar-start">
        <Link href="/perfil" className="flex items-center h-24 w-24">
          <Logo/>
        </Link>
      </div>

      <div className="navbar-center hidden md:flex gap-6">
        <Link href="/campanhas" className="text-lg btn btn-ghost">
          Campanha de Investimento
        </Link>
        <Link href="/espacos" className="text-lg btn btn-ghost">
          Espaços Alugáveis
        </Link>
        <Link href="/meusespacos" className="text-lg btn btn-ghost">
          Meus espaços
        </Link>
        <Link href="/microgrids" className="text-lg btn btn-ghost">
          Minhas microgrids
        </Link>
        <Link href="/perfil" className="text-lg btn btn-ghost">
          Perfil do Usuário
        </Link>
      </div>

      <div className="navbar-end">
        <ThemeController />
      </div>
    </nav>
  )
}

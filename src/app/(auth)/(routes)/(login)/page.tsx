"use client"

import Image from 'next/image'
import { LoginForm } from './components/LoginForm'
import Link from 'next/link'
import Logo from '/public/GridHubTextLogo.svg'

export default function LoginRoute() {
  return (
    <div className='flex grow'>
      <aside className='fex-1 hidden lg:block'>
        <Image src="/LoginAside.png" alt="Logo" width={641} height={833} className='h-screen' />
      </aside>
      <div className='flex-1 flex flex-col w-full justify-center items-center'>
        <div className='card p-6 w-full flex gap-4 max-w-[40rem]'>
          <h1 className='text-center dark:text-blue-500'>Seja Bem-Vindo(a) de volta ao</h1>
          <div>
            <Logo width="100%" height="100%" />
          </div>
          <LoginForm />
          <span className='text-center'>ou</span>
          <Link href="cadastro" className='btn btn-outline btn-primary mx-4'>Cadastre-se</Link>
        </div>
      </div>
    </div>
  )
}

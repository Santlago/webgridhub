"use client"

import { signIn } from 'next-auth/react'
import Image from 'next/image'

export default function LoginRoute() {
  return (
    <div className='flex grow'>
      <aside className='fex-1 hidden lg:block'>
        <Image src="/LoginAside.png" alt="Logo" width={641} height={833} className='h-screen' />
      </aside>
      <div className='flex-1 flex items-center'>
        <div className='card bg-base-300 p-6'>
          <h1 className='dark:text-pink-200 text-blue-500'>Seja Bem-Vindo(a) de volta ao</h1>
          <Image src="/GridHubTextLogoBlack.png" alt="Logo" width={200} height={200} />
          <button
            onClick={() => signIn('google')}
            className='btn btn-primary'
          >
            Log in with Google
          </button>
        </div>
      </div>
    </div>
  )
}

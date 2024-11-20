import Image from 'next/image'
import { CadastroForm } from './components/CadastroForm'

export default function CadastroRoute() {

  return (
    <div className='flex pt-8 px-8 w-screen'>
      <div className='flex-1 flex-col justify-between hidden lg:flex'>
        <Image src="/GridHubTextLogoWhite.png" alt="Logo" width={417} height={700} />
        <h1 className='font-bold text-4xl'>Preencha os campos com seus dados e deixe o resto com a gente :)</h1>
        <Image src="/CadastroImage.png" alt="Logo" width={417} height={528} className="" />
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <CadastroForm />
      </div>
    </div>
  )
}

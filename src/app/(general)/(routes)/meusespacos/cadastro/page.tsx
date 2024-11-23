import { EspacoCadastroForm } from './components/EspacoCadastroForm'


export default function CadastroEspaco() {
  return (
    <div className='flex-1 flex flex-col'>
      <h1 className='text-center my-4 font-bold text-4xl'>Cadastro Espaço</h1>
      <div className='flex flex-1 items-center justify-center'>
        <EspacoCadastroForm />
      </div>
    </div>
  )
}

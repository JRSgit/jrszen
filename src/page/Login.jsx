
import { useForm } from 'react-hook-form'
import Header from '../components/Header'
import Logo from '../components/Logo'

function Login() {
  const { reset, handleSubmit, register } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  })

  const handleClickEnter = (data) => {
    console.log(data)
    reset()
  }

  return (
    <div className='w-full h-screen flex flex-col justify-start items-center bg-[#121212]'>
      <Header />
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <Logo size={'w-[100px]'} />
        <form onSubmit={handleSubmit(handleClickEnter)} className="flex flex-col p-6 gap-3 rounded-md bg-slate-700 items-center">
          <h2 className="text-center text-white text-2xl">
            Acessar a area de Adiministrador
          </h2>
          <div className="w-full flex flex-col p-4">
            <label htmlFor="email">Email</label>
            <input
              {...register('email')}
              className='p-2 bg-slate-500 rounded-md text-2xl outline-none border-none text-gray-200'
              type="text" name="email" placeholder='Digite seu email.' />
          </div>
          <div className="w-full flex flex-col p-4">
            <label htmlFor="password">Senha</label>
            <input
              {...register('password')}
              className='p-2 bg-slate-500 rounded-md text-2xl outline-none border-none text-gray-200'
              type="password" name="password" placeholder='Digite sua senha de ADM.' />
          </div>
          <input
            className='p-2 bg-slate-600 rounded-md text-2xl w-fit cursor-pointer hover:bg-slate-500 transition-all'
            type="submit" value="Entrar" />

        </form>

      </div>

    </div>
  )
}

export default Login
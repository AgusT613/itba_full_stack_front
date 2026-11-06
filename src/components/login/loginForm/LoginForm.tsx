import FormMessage from '../formMessage/FormMessage'

interface ILoginForm {
  formAction: (formData: FormData) => Promise<void>
  success: boolean
  message: string | null
  formTitle: string
}

export default function LoginForm({
  formAction,
  success,
  message,
  formTitle,
}: ILoginForm) {
  return (
    <div className='w-full max-w-sm mx-auto flex flex-col gap-4'>
      <form action={formAction} className='flex flex-col gap-5'>
        <div className='flex flex-col gap-1.5'>
          <label
            className='text-sm font-medium text-foreground/90'
            htmlFor='username'
          >
            Nombre de usuario
          </label>
          <input
            className='w-full h-11 px-3 rounded-md bg-black/20 border border-white/20 focus:border-white focus:outline-none text-white text-base placeholder:text-white/40 transition-colors'
            name='username'
            type='text'
            placeholder='agus123'
          />
        </div>

        <div className='flex flex-col gap-1.5'>
          <label
            className='text-sm font-medium text-foreground/90'
            htmlFor='password'
          >
            Contraseña
          </label>
          <input
            className='w-full h-11 px-3 rounded-md bg-black/20 border border-white/20 focus:border-white focus:outline-none text-white text-base placeholder:text-white/40 transition-colors'
            name='password'
            type='password'
            placeholder='123'
          />
        </div>

        <input
          className='w-full cursor-pointer uppercase font-semibold text-sm py-3 px-4 rounded-md bg-primary-600 hover:bg-primary-700 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md mt-2'
          type='submit'
          value={formTitle}
          disabled={success}
        />
      </form>
      <FormMessage message={message} success={success} />
    </div>
  )
}

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Hexagon } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SignIn = () => {
  return (
    <div className=' text-Light/Light-300 bg-Dark/Dark-400 min-h-screen'>
      <main className='flex flex-col md:flex-row items-center justify-center gap-24 w-[96%] max-w-7xl mx-auto min-h-screen'>
        <div className='flex items-center md:gap-3 gap-1 font-semibold text-4xl '>
          <Hexagon size={48} className='text-Tints/Cake-100' fill='#065E7C' />
          food explorer
        </div>
        <div className='w-2/3 flex flex-col gap-6 md:bg-Dark/Dark-700 md:p-12 md:rounded-md md:max-w-xl'>
          <form className='flex flex-col items-center gap-8 '>
            <div className='w-full'>
              <label htmlFor='email' className='text-Light/Light-400'>
                E-mail
              </label>
              <Input
                className='text-Light/Light-500 bg-Dark/Dark-900'
                placeholder='mail@mail.com'
                id='email'
              />
            </div>
            <div className='w-full'>
              <label htmlFor='password' className='text-Light/Light-400'>
                Password
              </label>
              <Input
                className='text-Light/Light-500 bg-Dark/Dark-900'
                placeholder='Enter your password...'
                id='password'
              />
            </div>
            <Button type='submit'>Sign in</Button>
          </form>

          <h1 className='self-center'>
            Doesn't have an account?{' '}
            <Link to='/signup' className='text-Tints/Cake-200'>
              Sign up
            </Link>
          </h1>
        </div>
      </main>
    </div>
  );
};

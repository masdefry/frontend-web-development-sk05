import {
  loginSchema,
  type LoginRequest,
} from '@/features/login/validations/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginRequest>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (data: LoginRequest) => {
    try {
      const res = await axios.post(
        'https://api.backendless.com/80900C75-16BB-41B9-A507-BFBEB18800DB/DFDA6C49-11F9-4C6A-80AC-502464A70582/users/login',
        {
          login: data?.email,
          password: data?.password,
        },
      );
      console.log(res);
      toast.success('Login user successful');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className='p-10 flex justify-center'>
        <form onSubmit={handleSubmit(handleLogin)} className=' w-92'>
          <fieldset className='fieldset'>
            <legend className='fieldset-legend'>Email</legend>
            <input
              type='text'
              className='input border border-gray-300 w-full'
              placeholder='Type your email'
              {...register('email')}
            />
            <p>{errors?.email?.message}</p>
          </fieldset>
          <fieldset className='fieldset'>
            <legend className='fieldset-legend'>Password</legend>
            <input
              type='password'
              className='input border border-gray-300 w-full'
              placeholder='Type your password'
              {...register('password')}
            />
            {errors?.password?.message}
          </fieldset>
          <button className='btn btn-success mt-3 w-full'>Login</button>
        </form>
      </div>
    </>
  );
}

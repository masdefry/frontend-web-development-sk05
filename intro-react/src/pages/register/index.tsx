import { useRef } from "react";

export default function RegisterPage() {
    const inputUsername = useRef<HTMLInputElement>(null);
    const inputEmail = useRef<HTMLInputElement>(null); 

    const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        console.log('Triggerrr');
        console.log(inputUsername.current?.value);
        console.log(inputEmail.current?.value); 
    }

  return (
    <>
      <div className='bg-red-100 flex justify-center'>
        <form onSubmit={handleRegister} className=' w-92'>
          <fieldset className='fieldset'>
            <legend className='fieldset-legend'>Username</legend>
            <input
              type='text'
              className='input border border-gray-300 w-full'
              placeholder='Type your username'
              ref={inputUsername}
            />
          </fieldset>
          <fieldset className='fieldset'>
            <legend className='fieldset-legend'>Email</legend>
            <input
              type='text'
              className='input border border-gray-300 w-full'
              placeholder='Type your email'
              ref={inputEmail}
            />
          </fieldset>
          <button className='btn btn-outline btn-secondary mt-3 w-full'>Secondary</button>
        </form>
      </div>
    </>
  );
}

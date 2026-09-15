export default function RegisterPage() {
  return (
    <>
      <div className='bg-red-100 flex justify-center'>
        <form className=' w-92'>
          <fieldset className='fieldset'>
            <legend className='fieldset-legend'>Username</legend>
            <input
              type='text'
              className='input border border-gray-300 w-full'
              placeholder='Type your username'
            />
          </fieldset>
          <button className='btn btn-outline btn-secondary mt-3 w-full'>Secondary</button>
        </form>
      </div>
    </>
  );
}

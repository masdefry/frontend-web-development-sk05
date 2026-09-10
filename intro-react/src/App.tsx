import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h1 className='text-[120px] text-yellow-500'>Hello World!</h1>
      <p className='text-[#E2B4BD]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolore
        dicta rem iusto illum ad magnam! Laudantium accusantium blanditiis vel
        est neque aut, inventore alias? Odio vitae consequuntur modi ea.
      </p>
      <div className='grid grid-cols-3 gap-10'>
        <div className='bg-gray-100'>1</div>
        <div className='bg-red-100'>2</div>
        <div className='bg-yellow-100'>3</div>
        <div className='bg-gray-100'>1</div>
        <div className='bg-red-100'>2</div>
        <div className='bg-yellow-100'>3</div>
      </div>
      <div className='flex justify-center'>
        <h1 className='text-9xl'>Promo Buy 1 Get 1</h1>
      </div>
      <Button variant='secondary' disabled>
        Downloading
        <Spinner data-icon='inline-start' />
      </Button>
      <Link to={'/profile'}>Go to Profile Page</Link>
      <Link to={'/detail-product/sepatu-futsal-kw'}>
        Go to Detail Product Page
      </Link>
    </>
  );
}

export default App;

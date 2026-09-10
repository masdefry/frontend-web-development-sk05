import { HiMenuAlt3 } from 'react-icons/hi';
import Card from './components/Card';

function App() {
  return (
    <>
      <button className='btn btn-soft btn-error bg-secondary'>Error</button>
      <div className='join grid grid-cols-2'>
        <button className='join-item btn btn-outline'>Previous page</button>
        <button className='join-item btn btn-outline'>Next</button>
      </div>
      <HiMenuAlt3 className='text-3xl text-red-500' />
      <h1 className='text-primary bg-blue-100 md:text-yellow-700 md:bg-yellow-100'>
        Typescript
      </h1>

      <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 bg-secondary'>
        <Card packageName={'PREMIUM'} price={29} />
        <Card packageName={'SILVER'} price={35} />
        <Card packageName={'GOLD'} price={40} />
      </div>
    </>
  );
}

export default App;

import { HiMenuAlt3 } from "react-icons/hi";

function App() {
  return (
    <>
      <button className='btn btn-soft btn-error'>Error</button>
      <div className='join grid grid-cols-2'>
        <button className='join-item btn btn-outline'>Previous page</button>
        <button className='join-item btn btn-outline'>Next</button>
      </div>
      <HiMenuAlt3 className="text-3xl text-red-500" />
      <h1 className="text-blue-500 bg-blue-100 md:text-yellow-700 md:bg-yellow-100">
        Typescript
      </h1>
    </>
  );
}

export default App;

import { useAnythingStore } from "@/stores/useAnythingStore";
import { useRef } from "react";

export default function GlobalStateManagementPage() {
  const inputSomething = useRef<HTMLInputElement>(null); 
  const {setAnything} = useAnythingStore()

  const handleInput = () => {
    console.log(inputSomething.current!.value); 
    setAnything(inputSomething.current!.value); 
  };

  return (
    <>
      <div className='p-10'>
        <h1 className='text-2xl font-bold'>Belajar Global State</h1>
        <div>
          <input ref={inputSomething} type='text' placeholder='Type here' className='input mt-10' />
        </div>
        <button onClick={handleInput} className='btn btn-success'>Submit</button>
      </div>
    </>
  );
}

// Share Layout

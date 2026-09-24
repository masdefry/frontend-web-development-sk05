import { useAnythingStore } from "@/stores/useAnythingStore";

export default function Navbar() {
  const {anything} = useAnythingStore(); 
  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <a className='btn btn-ghost text-xl'>daisyUI</a>
      {anything}
    </div>
  );
}

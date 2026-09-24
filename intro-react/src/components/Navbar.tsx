import { useAuthStore } from '@/stores/useAuthStore';

export default function Navbar() {
  const { username } = useAuthStore();
  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <a className='btn btn-ghost text-xl'>daisyUI</a>
      {username}
    </div>
  );
}

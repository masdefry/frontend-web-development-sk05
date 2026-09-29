import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface UseAuthStore {
  username: string;
  setUsername: (newValue: string) => void;
}

export const useAuthStore = create<UseAuthStore>()(
  persist(
    (set) => ({
      username: '',
      setUsername: (newValue: string) =>
        set({
          username: newValue,
        }),
    }),
    {
      name: 'username',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
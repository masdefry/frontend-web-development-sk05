import { create } from 'zustand';

interface UseAuthStore {
  username: string;
  setUsername: (newValue: string) => void;
}

export const useAuthStore = create<UseAuthStore>((set) => ({
  username: '',
  setUsername: (newValue: string) =>
    set(() => ({
      username: newValue,
    })),
}));

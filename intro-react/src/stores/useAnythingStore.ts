import { create } from 'zustand';

interface UseAnythingStore {
  anything: string;
  setAnything: (newValue: string) => void;
}

export const useAnythingStore = create<UseAnythingStore>((set) => ({
  anything: '',
  setAnything: (newValue: string) =>
    set(() => ({
      anything: newValue,
    })),
}));

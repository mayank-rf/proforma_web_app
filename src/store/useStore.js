// store/useStore.js
import { create } from 'zustand';

const useStore = create((set) => ({
  addressHeader: '',
  setAddress: (newAddress) => set(() => {
    return { addressHeader: newAddress };
  }),
}));

export default useStore;

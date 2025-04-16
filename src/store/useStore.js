// store/useStore.js
import { create } from 'zustand';

const useStore = create((set) => ({
    addressHeader: '',
    siteFactors: [],
    setAddress: (newAddress) =>
        set(() => {
            return { addressHeader: newAddress };
        }),
    setSiteFactors: (newSiteFactors) =>
        set(() => {
            return { siteFactors: newSiteFactors };
        }),
}));

export default useStore;

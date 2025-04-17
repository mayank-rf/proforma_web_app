// store/useStore.js
import { create } from 'zustand';

const useStore = create((set) => ({
  addressHeader: '',
  siteFactors:[],
  washPackages:[],
  laborInformation:[],
  setAddress: (newAddress) => set(() => {
    return { addressHeader: newAddress };
  }),
  setSiteFactors: (newSiteFactors) => set(() => {
    return { siteFactors: newSiteFactors };
  }),
  setWashPackages: (newWashPackages) => set(() => {
    return { washPackages: newWashPackages };
  }),
  setLaborInformation: (newLaborInformation) => set(() => {
    return { laborInformation: newLaborInformation };
  })
}));

export default useStore;

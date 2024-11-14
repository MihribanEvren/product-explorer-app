import { create } from 'zustand';

export const useProductsStore = create((set) => ({
  totalProducts: 0,
  setTotalProducts: (total) => set({ totalProducts: total }),
}));

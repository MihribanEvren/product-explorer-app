import { create } from 'zustand';

export const useProductsStore = create((set) => ({
  products: [],
  totalProducts: 0,
  setProducts: (products) => set({ products }),
  setTotalProducts: (total) => set({ totalProducts: total }),
}));

import { create } from 'zustand';

export const useFiltersStore = create((set) => ({
  itemsPerPage: 20,
  currentPage: 1,
  setItemsPerPage: (itemsPerPage) => set({ itemsPerPage }),
  setCurrentPage: (page) => set({ currentPage: page }),
}));

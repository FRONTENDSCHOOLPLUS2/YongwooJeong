import { create } from "zustand";

const usePageStore = create((set) => ({
  currentPage: null,
  lastPage: null,
  setCurrentPage: (value) => set(() => ({ currentPage: value })),
  setLastPage: (value) => set(() => ({ lastPage: value })),
}));

export default usePageStore;

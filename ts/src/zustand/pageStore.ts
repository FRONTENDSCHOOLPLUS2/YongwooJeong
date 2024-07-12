import { create } from "zustand";

interface PageStore {
  currentPage: number | null;
  lastPage: number | null;
  setCurrentPage: (value: number) => void;
  setLastPage: (value: number) => void;
}

const usePageStore = create<PageStore>((set) => ({
  currentPage: null,
  lastPage: null,
  setCurrentPage: (value) => set(() => ({ currentPage: value })),
  setLastPage: (value) => set(() => ({ lastPage: value })),
}));

export default usePageStore;

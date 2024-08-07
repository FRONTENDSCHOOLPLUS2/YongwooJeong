import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUsersStore = create(
  persist(
    (set) => ({
      isLogin: false,
      loginUserData: null,
      setIsLogin: (value) => set(() => ({ isLogin: value })),
      setLoginUserData: (userData) =>
        set((state) => ({
          loginUserData: { ...state.loginUserData, ...userData },
        })),
    }),
    { name: "user" }
  )
);

export default useUsersStore;

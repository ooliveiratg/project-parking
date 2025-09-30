import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
type usernameZustand = {
  username: string | null;
  token: string | null;
  setToken: (token: string) => void;
  setUsername: (name: string) => void;
  fetchUser: () => Promise<void>;
};

export const usernameState = create(
  persist<usernameZustand>((set, get) => ({
    username: null,
    token: null,
    setToken: (token) => set({ token }),
    setUsername: (name) => set({ username: name }),
    fetchUser: async () => {
      const token = get().token;
      if (!token) return console.log("error com o token");
      try {
        const res = await fetch("https://parking-api-9rj9.onrender.com/auth/me", {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        const data = await res.json()
        set({username: data.nome})

      } catch (error) {
        console.log(error);
      }
    },
  }),
        {
            name: "auth-storage",          
            storage: createJSONStorage(() => AsyncStorage),
        }
  )
);

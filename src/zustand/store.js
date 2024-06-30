import { create } from "zustand";
const store = (set) => ({
	navBarOpened: false,
	setNavBarOpened: (value) => set(() => ({ navBarOpened: value })),
});
export const useStore = create(store);

import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}
interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number | undefined) => void;
  setPlatformId: (platformId: number | undefined) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
  reset: () => void;
}
const initialState = {
  genreId: undefined,
  platformId: undefined,
  sortOrder: "",
  searchText: "",
};
const useGameStore = create<GameQueryStore>((set) => ({
  gameQuery: initialState,
  setGenreId: (genreId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, platformId },
    })),
  setSortOrder: (sortOrder) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, sortOrder },
    })),
  setSearchText: (searchText) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, searchText },
    })),
  reset: () => set({ gameQuery: initialState }),
}));
if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("gameStore", useGameStore);
}
export default useGameStore;

import { useContext } from "react";
import { StoreContext } from "./providers/StoreProvider";

export function useNewsStore() {
  const rootStore = useContext(StoreContext);

  if (!rootStore) {
    throw new Error("RootStore not found");
  }

  return rootStore.newsStore;
}

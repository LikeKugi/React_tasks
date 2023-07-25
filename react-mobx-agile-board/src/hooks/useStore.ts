import {useContext} from "react";
import {StoreContext} from "../providers/StoreProvider";

export default function useStore() {
  return useContext(StoreContext);
}

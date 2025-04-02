import { use } from "react"
import { NavContext } from "../context/NavContext"

export const useNav = () => {
  const context = use(NavContext);

  if (!context) throw new Error('useNav cannot be used outside NavProvider')

  return context;
}
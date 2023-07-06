import { useMemo } from "react";

export const useConst = <TValue>(func: () => TValue) => {
  return useMemo(() => func(), [])
}
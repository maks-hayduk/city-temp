import { useCities } from "@/gateway/city/useCities";
import { useMemo } from "react";

export const useSelectOptions = () => {
  const cities = useCities();

  return useMemo(() => cities.map(({ name, ...rest }) => ({ label: name, value: name, ...rest })), [cities]);
}
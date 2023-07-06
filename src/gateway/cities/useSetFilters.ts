import { SetFiltersService } from "@/business/cities/services/set-filters.service";
import { useConst } from "@/infrastructure/hooks/useConst";

export const useSetFilters = () => {
  const service = useConst(() => new SetFiltersService());

  return service.set;
}

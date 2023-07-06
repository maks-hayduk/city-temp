import { FetchCitiesInfoService } from "@/business/cities/services/fetch-cities-info.service";
import { useConst } from "@/infrastructure/hooks/useConst";

export const useFetchCitiesInfo = () => {
  const service = useConst(() => new FetchCitiesInfoService());

  return service.fetch;
}

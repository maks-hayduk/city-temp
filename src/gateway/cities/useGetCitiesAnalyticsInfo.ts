import { GetCitiesAnalyticInfoService } from "@/business/cities/services/get-cities-analytic-info.service";
import { useConst } from "@/infrastructure/hooks/useConst";

export const useGetCitiesAnalyticInfo = () => {
  const service = useConst(() => new GetCitiesAnalyticInfoService());

  return service.get();
}

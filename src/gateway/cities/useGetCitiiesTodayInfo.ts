import { GetCitiesTodayInfoService } from "@/business/cities/services/get-cities-today-info.service";
import { useConst } from "@/infrastructure/hooks/useConst";

export const useGetCitiesTodayInfo = () => {
  const service = useConst(() => new GetCitiesTodayInfoService());

  return service.get();
}

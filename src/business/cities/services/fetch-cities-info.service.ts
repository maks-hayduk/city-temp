import { RequestService } from "@/infrastructure/request/request.service";
import { diContainer } from "@/inversify.config";
import citiesData from "@/mocks/cities.json";

import { CitiesStore } from "../store/cities.store";
import { CityResponseModel } from "../models/city-response.model";
import { WEEKDAY } from "../const/weekday";

export class FetchCitiesInfoService {
  private readonly _requestService = new RequestService();
  private readonly _citiesStore = diContainer.get(CitiesStore);

  fetch = async () => {
    citiesData.cities.map((city) => {
      return this._requestService
        .request<CityResponseModel>(`/forecast?latitude=${city.lat}&longitude=${city.long}&daily=temperature_2m_max,temperature_2m_min,winddirection_10m_dominant&timezone=GMT&forecast_days=1&past_days=7`)
        .then((response) => {
          this._citiesStore.addCity({
            ...city,
            tMax: response.daily.temperature_2m_max,
            tMin: response.daily.temperature_2m_min,
            wind: response.daily.winddirection_10m_dominant
          })

          if (!this._citiesStore.getWeekDays().length) {
            this._citiesStore.setWeekDays(this._normalizeWeekDays(response.daily.time));
          }
        })
    });
  }

  private _normalizeWeekDays = (weekTime: string[]) => {
    return weekTime.map(this._normalizeWeekDay);
  }

  private _normalizeWeekDay = (weekTime: string) => {
    const day = new Date(weekTime).getDay();

    return WEEKDAY[day];
  }
}
import { diContainer } from "@/inversify.config";
import { toJS } from "mobx";

import { CitiesStore } from "../store/cities.store";
import { CURRENT_DAY_INDEX } from "../const/current-day-index";

export class GetCitiesTodayInfoService {
  private readonly _citiesStore = diContainer.get(CitiesStore);

  get = () => {
    const cities = toJS(this._citiesStore.getCities());

    return cities.map(({ tMax, tMin, wind, ...rest }) => ({
      ...rest,
      tMax: tMax[CURRENT_DAY_INDEX],
      tMin: tMin[CURRENT_DAY_INDEX],
      wind: wind[CURRENT_DAY_INDEX]
    }));
  }
}
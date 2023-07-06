import { diContainer } from "@/inversify.config";

import { CitiesStore } from "../store/cities.store";
import { Filters } from "../models/filters.model";

export class SetFiltersService {
  private readonly _citiesStore = diContainer.get(CitiesStore);

  set = (filters: Filters) => {
    this._citiesStore.setFilters(filters);
  }
}
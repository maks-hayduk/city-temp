import { makeAutoObservable } from "mobx";
import { injectable } from "inversify";

import { CityModel } from "../models/initial-city.model";
import { Filters } from "../models/filters.model";
import { CURRENT_DAY_INDEX } from "../const/current-day-index";

@injectable()
export class CitiesStore {
  private _cities: CityModel[] = [];
  private _weekDays: string[] = [];
  private _filters: Filters = {};

  constructor() {
    makeAutoObservable(this);
  }

  getCities = () => {
    return this._cities.filter((city) => {
      if (!Object.keys(this._filters).length || this._isFiltersEmpty()) {
        return city;
      }
      
      if (this._filters.name?.includes(city.name) || (this._filters.max && this._filters.max >= city.tMax[CURRENT_DAY_INDEX] && this._filters.min && this._filters.min <= city.tMin[CURRENT_DAY_INDEX])) {
        return city;
      }
    });
  }

  addCity = (city: CityModel) => {
    this._cities.push(city);
  }

  getWeekDays = () => {
    // Omit current day as last index
    return this._weekDays.slice(0, -1);
  }

  setWeekDays = (weekDays: string[]) => {
    this._weekDays = weekDays;
  }

  setFilters = (filters: Filters) => {
    this._filters = { ...this._filters, ...filters };
  }

  private _isFiltersEmpty = () => {
    const isNameEmpty = !this._filters.name?.length;
    const isMinEmpty = !this._filters.min;
    const isMaxEmpty = !this._filters.max;

    return isNameEmpty && isMinEmpty && isMaxEmpty;
  }
}

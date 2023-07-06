import { diContainer } from "@/inversify.config";
import { toJS } from "mobx";

import { CitiesStore } from "../store/cities.store";

export class GetCitiesAnalyticInfoService {
  private readonly _citiesStore = diContainer.get(CitiesStore);

  get = () => {
    const avgTemps = toJS(this._getAvgTemp());
    const weekDays = toJS(this._citiesStore.getWeekDays());

    return  weekDays.reduce<Array<{ name: string, temp: Number }>>((acc, current, idx) => {
      acc.push({ name: current, temp: avgTemps[idx] })

      return acc;
    }, [])
  }

  private _getAvgTemp = () => {
    const cities = this._citiesStore.getCities();

    const avgTempForWeek = cities.map(({ tMax, tMin }) => this._getAvgBetweenMinMax(tMin, tMax));

    if (!avgTempForWeek[0]) {
      return [];
    }

    const result: number[] = [];

    for (let i = 0; i < avgTempForWeek[0].length; i++) {
      let dayResult = 0;

      for (let j = 0; j < avgTempForWeek.length; j++) {
        dayResult += avgTempForWeek[j][i];
      }

      result.push(+(dayResult / avgTempForWeek.length).toFixed(2));
    }
  
    return result;
  }

  private _getAvgBetweenMinMax = (tMin: number[], tMax: number[]) => {
    return tMin.reduce<number[]>((acc, current, idx) => { 
      acc.push((current + tMax[idx]) / 2);
      
      return acc;
    }, [])
  }
}
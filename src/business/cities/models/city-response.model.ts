export type CityResponseModel = {
  daily: {
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    winddirection_10m_dominant: number[];
    time: string[];
  }
}
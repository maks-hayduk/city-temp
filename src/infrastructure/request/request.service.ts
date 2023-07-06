import axios from "axios";

type Options = {
  method: "get"
}

export class RequestService {
  private _baseUrl;

  constructor(apiBaseUrl = "https://api.open-meteo.com/v1") {
    this._baseUrl = apiBaseUrl;
  }

  request = async <T>(endpoint: string, options?: Options) => {
    const response = await axios[options?.method || 'get']<T>(`${this._baseUrl}${endpoint}`);
    
    return response.data;
  }
}

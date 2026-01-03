import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OpenMeteoResponse, CurrentWeather } from './weather.model';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private apiUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) {}

  /**
   * Returns the full Open-Meteo response
   */
  getCurrentWeather(lat: number, lon: number): Observable<OpenMeteoResponse> {
    const url = `${this.apiUrl}?latitude=${lat}&longitude=${lon}&current_weather=true`;
    return this.http.get<OpenMeteoResponse>(url);
  }

  /**
   * Return only the current weather object.
   */
  getCurrentOnly(lat: number, lon: number): Observable<CurrentWeather | null> {
    return this.getCurrentWeather(lat, lon).pipe(map(r => r.current_weather ?? null));
  }
}
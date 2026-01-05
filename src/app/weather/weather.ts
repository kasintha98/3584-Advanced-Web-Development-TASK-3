import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../services/weather.service';
import { OpenMeteoResponse, CurrentWeather } from '../services/weather.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="weather-section">
      <h2>Current Weather: Hildesheim</h2>

      <div *ngIf="loading" class="loading">Getting data...</div>
      <div *ngIf="error" class="error">{{ error }}</div>

      <div *ngIf="weather && !loading" class="weather-card">
        <div class="weather-info">
          <div class="temperature">{{ weather.current_weather?.temperature }}°C</div>
          <div class="location">Latitude: {{ weather.latitude }}, Longitude: {{ weather.longitude }}</div>
          <div class="timezone">Timezone: {{ weather.timezone }}</div>
          <div class="time">Time: {{ weather.current_weather?.time }}</div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `.weather-section { max-width: 520px; margin: 2rem auto; padding: 1rem; }`,
    `.weather-section h2 { color: var(--palette-1); margin: 0 0 0.25rem 0; }`,
    `.weather-card { background: linear-gradient(90deg,#fff,var(--palette-4)); padding: 1rem; border-radius:12px; border:1px solid rgba(54,101,107,0.06); }`,
    `.temperature { font-size:2rem; font-weight:800; color: var(--palette-2); }`,
    `.location, .timezone, .time { color:var(--muted); font-size:0.95rem; margin-top:0.25rem; }`,
    `.loading { color:var(--muted); font-style:italic; }`,
    `.error { color:#FF0060; font-weight:700; }`
  ]
})
export class Weather implements OnInit, OnDestroy {
    weather?: OpenMeteoResponse | null;
    loading = false;
    error: string | null = null;
    private sub?: Subscription;

    constructor(private svc: WeatherService, private cdr: ChangeDetectorRef) {}

    ngOnInit() {
      this.loadWeather();
    }

    private loadWeather() {
      this.sub?.unsubscribe();
      this.loading = true;
      this.error = null;

      this.sub = this.svc.getCurrentWeather(52.1548, 9.9580)
        .subscribe({
          next: (w) => {
            this.weather = w;
            this.loading = false;
            this.cdr.markForCheck(); // used for change detection to update the UI after recieving data
          },
          error: (err) => {
            this.error = String(err?.message ?? err);
            this.loading = false;
            this.cdr.markForCheck();
          }
        });
    }

    ngOnDestroy() {
      this.sub?.unsubscribe();
    }
  }
import { Injectable } from '@angular/core';

export interface Metrics {
  users: number;
  visits: number;
}

@Injectable({ providedIn: 'root' })
export class GlobalDataService {
  appTitle = 'task-3-app';
  version = '0.1.0';
  metrics: Metrics = { users: 12, visits: 345 };

  getDouble(n: number): number {
    return n * 2;
  }

  getGreeting(name: string): string {
    return `Hello, ${name}`;
  }
}

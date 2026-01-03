import { Injectable } from '@angular/core';

export type Vehicle = Car | Train | Airplane | Ship;

export interface VehicleBase {
  id: string;
  kind: 'car' | 'train' | 'airplane' | 'ship';
  model: string;
}

export interface Car extends VehicleBase {
  kind: 'car';
  wheels: number;
  seats: number;
}

export interface Train extends VehicleBase {
  kind: 'train';
  carriages: number;
  electrified: boolean;
}

export interface Airplane extends VehicleBase {
  kind: 'airplane';
  engines: number;
  rangeKm: number;
}

export interface Ship extends VehicleBase {
  kind: 'ship';
  tonnage: number;
  lengthM: number;
}

@Injectable({ providedIn: 'root' })
export class VehiclesService {
  // data set
  private vehicles: Vehicle[] = [
    { id: 'c1', kind: 'car', model: 'Toyota Corolla', wheels: 4, seats: 5 },
    { id: 't1', kind: 'train', model: 'InterCity Express', carriages: 8, electrified: true },
    { id: 'a1', kind: 'airplane', model: 'Boeing 737', engines: 2, rangeKm: 5600 },
    { id: 's1', kind: 'ship', model: 'Evergreen', tonnage: 200000, lengthM: 400 },
    { id: 'c2', kind: 'car', model: 'Tesla Model 3', wheels: 4, seats: 5 }
  ];

  getAll(): Vehicle[] {
    // return copy to avoid accidental mutation
    return this.vehicles.map(v => ({ ...v }));
  }

  getById(id: string): Vehicle | undefined {
    return this.vehicles.find(v => v.id === id);
  }
}

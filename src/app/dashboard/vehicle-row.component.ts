import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehicle, Car, Train, Airplane, Ship } from '../services/vehicles.service';

@Component({
  // use an attribute selector on <tr> so the DOM remains valid for tables
  selector: 'tr[app-vehicle-row]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle-row.component.html',
  styleUrls: ['./vehicle-row.component.scss']
})
export class VehicleRowComponent {
  @Input() vehicle!: Vehicle;
  @Output() selected = new EventEmitter<Vehicle>();

  emitSelect() {
    this.selected.emit(this.vehicle);
  }

  isCar(v: Vehicle): v is Car {
    return v.kind === 'car';
  }

  isTrain(v: Vehicle): v is Train {
    return v.kind === 'train';
  }

  isAirplane(v: Vehicle): v is Airplane {
    return v.kind === 'airplane';
  }

  isShip(v: Vehicle): v is Ship {
    return v.kind === 'ship';
  }
}

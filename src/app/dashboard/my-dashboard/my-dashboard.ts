import { Component } from '@angular/core';
import { GlobalDataService } from '../../services/global-data.service';
import { VehiclesService, Vehicle } from '../../services/vehicles.service';
import { VehicleRowComponent } from '../vehicle-row.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-dashboard',
  standalone: true,
  imports: [CommonModule, VehicleRowComponent],
  templateUrl: './my-dashboard.html',
  styleUrls: ['./my-dashboard.scss'],
})
export class MyDashboard {
  title = '';
  users = 0;
  doubledUsers = 0;
  welcomeMessage = '';
  visits = 0;
  vehicles: Vehicle[] = [];
  selected?: Vehicle;

  constructor(private data: GlobalDataService, private vehiclesService: VehiclesService) {
    this.title = data.appTitle;
    this.users = data.metrics.users;
    this.visits = data.metrics.visits;
    this.doubledUsers = data.getDouble(this.users);
    this.welcomeMessage = data.getGreeting('Kasintha');
    // load vehicles from injected service
    this.vehicles = this.vehiclesService.getAll();
  }

  onSelected(v: Vehicle) {
    this.selected = v;
  }
}

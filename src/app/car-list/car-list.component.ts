import { Component, OnInit } from '@angular/core';
import {CarService} from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  public cars = [];
  public errorMessages;

  constructor(private _carService: CarService ) { }

  ngOnInit() {
    this.getCars();
  }
  getCars(sort?: string) {
    this._carService.getCars(sort)
      .subscribe(data => this.cars = data,
        error => this.errorMessages = error);
  }

  radioChangeHandler(event: any) {
    this.getCars(event.target.value);
  }
}

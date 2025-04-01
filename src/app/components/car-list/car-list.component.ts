import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/carService.service';
import { car } from '../../models/car';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit {

    cars: car[]=[];

    /**
     *
     */
    constructor(private carService: CarService) {
      

    }

    ngOnInit(): void {
      this.loadCars();
    }
    loadCars():void{
      this.cars=this.carService.getCars();
    }

    deleteCar(id:number):void{
      this.carService.deleteCar(id);
      this.loadCars();//refrese View
    }

  
}

import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/carService.service';
import { car } from '../../models/car';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-car-create-update',
  standalone: true,
  imports: [],
  templateUrl: './car-create-update.component.html',
  styleUrl: './car-create-update.component.css'
})
export class CarCreateUpdateComponent implements OnInit{
  myCar :car={ id:0,name:'',price:0};
  isEdit=false;

  constructor(
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    

    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const carId = Number(id);
      const foundCar = this.carService.getCars().find(c => c.id === carId);
      if (foundCar) {
        this.myCar = foundCar;
        this.isEdit = true;
      }
    }
  }

  saveCar(): void {
    if (this.isEdit) {
      const cars = this.carService.getCars().map(c => (c.id === this.myCar.id ? this.myCar : c));
      localStorage.setItem('cars', JSON.stringify(cars));
    } else {
      this.carService.addCar(this.myCar);
    }
    this.router.navigate(['/cars']);
  }
}

import { Injectable } from '@angular/core';
import { car } from '../models/car';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  

  private localStorageKey = 'cars';

  constructor() { }

  // Obtener todos los autos del almacenamiento
  getCars(): car[] {
    const cars = localStorage.getItem(this.localStorageKey);
    return cars ? JSON.parse(cars) : [];
  }

  // Agregar un nuevo auto
  addCar(car: car): void {
    const cars = this.getCars();
    car.id = cars.length > 0 ? cars[cars.length - 1].id + 1 : 1; // Generar ID automático
    cars.push(car);
    localStorage.setItem(this.localStorageKey, JSON.stringify(cars));
  }

  // Eliminar un auto por ID
  deleteCar(id: number): void {
    const cars = this.getCars().filter(car => car.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(cars));
  }

  // Limpiar todos los autos
  clearCars(): void {
    localStorage.removeItem(this.localStorageKey);
  }
}

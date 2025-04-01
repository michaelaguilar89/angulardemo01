import { Routes } from '@angular/router';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarCreateUpdateComponent } from './components/car-create-update/car-create-update.component';

export const routes: Routes = [
    {path:'', redirectTo:'cars',pathMatch:'full'},
    {path:'cars',component:CarListComponent},
    {path:'car/add',component:CarCreateUpdateComponent},
    {path:'car/edit/:id',component:CarCreateUpdateComponent}
];

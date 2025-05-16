import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { Seccion1Component } from './seccion1/seccion1.component';

export const routes: Routes = [
    {
        path:'inicio',
        component:InicioComponent
    },
    {
        path:'seccion1',
        component:Seccion1Component
    }
    
];

import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { VentasComponent } from './ventas/ventas.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'inicio',
        pathMatch:'full'

    },
    {
        path:'inicio',
        component:InicioComponent
    },
    {
        path:'seccion1',
        component:VentasComponent
    }
    
];

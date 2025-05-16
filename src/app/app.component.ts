import { Component} from '@angular/core';
import { RouterOutlet,RouterLink  } from '@angular/router';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list'
import {MatCardModule} from '@angular/material/card'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
//clase
export class AppComponent {
  title = 'proyecto';//atributo
 
  menuItems:any[] =[
    {
      icon:'apps',
      label:'Lista de productos',
      route:'inicio'
    },
    {
      icon:'add',
      label:'Seccion de ventas',
      route:'seccion1'
    },
    
  ]

}


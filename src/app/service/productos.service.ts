import { Injectable } from '@angular/core';
import { Products } from '../inicio/inicio.component';

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    productos:Products[]=[
        {
            id:1,
            name:"Inca Kola 1.5L",
            price:2.50,
            imageUrl:"https://tofuu.getjusto.com/orioneat-local/resized2/zHddAZEo8odMksKMb-300-x.webp",
            stock:100,
            description:"Bebida gaseosa sabor nacional de 1.5 litros."
        },
        {
            id:2,
            name:"Coca Cola 1.5L",
            price:2.50,
            imageUrl:"https://www.chilis.pe/_next/image?url=https%3A%2F%2Fdelosi-pidelo.s3.amazonaws.com%2Fchilis%2Fproducts%2Fcoca-cola-1-litro-202501071828210373.jpg&w=3840&q=75",
            stock:80,
            description:"Gaseosa Coca Cola de 1.5 litros."
        },
        {
            id:3,
            name:"Fanta 1.5L",
            price:2.00,
            imageUrl:"https://socialdrinks.pe/wp-content/uploads/2022/09/989_gldKg0uoHyX7lLzsO956GfYH9cbNPKl8LX2BouDx.png",
            stock:90,
            description:"Gaseosa Fanta de 1.5 litros."
        },
        {
            id:4,
            name:"Sprite 1.5L",
            price:1.50,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggxWK_EIGsE2Nw-83rf105IUQ9tIVyf0mlw&s",
            stock:90,
            description:"Gaseosa Sprite de 1.5 litros."
        },
        {
            id:5,
            name:"Inca Kola 450 ml",
            price:1.00,
            imageUrl:"https://f72a869224.cbaul-cdnwnd.com/1fb98be8c4f6ba2749bd0ebc7d253908/200000033-a3ba7a4b62/700/Inca%20Kola%20Sabor%20Original%20450%20ml.jpg?ph=f72a869224",
            stock:90,
            description:"Bebida gaseosa sabor nacional de 450 ml."
        },
        //modificar
        {
            id:6,
            name:"Inca Kola 450 ml",
            price:1.00,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggxWK_EIGsE2Nw-83rf105IUQ9tIVyf0mlw&s",
            stock:90,
            description:"Bebida gaseosa sabor nacional de 450 ml."
        },
        {
            id:7,
            name:"Inca Kola 450 ml",
            price:1.00,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggxWK_EIGsE2Nw-83rf105IUQ9tIVyf0mlw&s",
            stock:90,
            description:"Bebida gaseosa sabor nacional de 450 ml."
        },
        {
            id:8,
            name:"Inca Kola 450 ml",
            price:1.00,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggxWK_EIGsE2Nw-83rf105IUQ9tIVyf0mlw&s",
            stock:90,
            description:"Bebida gaseosa sabor nacional de 450 ml."
        },
    ]
    getProducts(){
        return this.productos
    }
    getProductsporId(id:number){
        return this.productos.find((productos)=>productos.id === id)
    }
}
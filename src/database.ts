import { TProducts, TUsers } from "./types"

export const users: TUsers [] = [
    {
        id: "u001",
        name: "fulano",
        email: "fulano@email.com",
        password: "fulano123",
        createdAt: "new Date().toISOString"  
    },
    {
        id: "u002",
        name: "beltrana",
        email: "beltrana@email.com",
        password: "beltrana000",
        createdAt: "new Date().toISOString"
    }
]

export const products: TProducts [] = [
    {
        id: "prod001",
        name: "Mouse gamer",
        price: 250,
        description: "Melhor mouse do mercado!",
        imageUrl: "https://picsum.photos/seed/Mouse%20gamer/400" 
    },
    {
        id: "prod002",
        name: "Monitor",
        price: 900,
        description: "Monitor LED Full HD 24 polegadas",
        imageUrl: "https://picsum.photos/seed/Monitor/400" 
    }
]


   

   

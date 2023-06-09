import { Router } from "express";
const pets = [];
const petsRouter = Router();
//punto de control con middelware
petsRouter.use((req,res,next)=>{
    if (req.body.tipo === "Perro") {
        res.status(403).send('No se admiten perros')
    }
    next();
})

petsRouter.get('/',(req,res)=>{
    res.send(pets);
});

petsRouter.post('/', (req, res)=>{
    const pet = req.body
    pets.push(pet)
    res.status(201).send(pets);
});

export {petsRouter};
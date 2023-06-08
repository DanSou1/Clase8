import { Router } from "express";
const pets = [];
const petsRouter = Router();

petsRouter.get('/',(req,res)=>{
    res.send(pets);
});

petsRouter.post('/', (req, res)=>{
    const pet = req.body
    pets.push(pet)
    res.status(201).send(pets);
});

export {petsRouter};
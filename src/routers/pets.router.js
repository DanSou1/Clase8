import { Router } from "express";
const pets = [];
const petsRouter = Router();

petsRouter.get('/',(req,res)=>{
    res.send(pets);
});

petsRouter.post('/', (req, res)=>{
    const pet = req.body
    users.push(pet)
    res.status(201).send(pet);
});

export {petsrouter};
import { Router } from "express";
import {imgUploader} from "../configs/uploadimg"
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

petsRouter.post('/',imgUploader.single('img'), (req, res)=>{
    if (!req.file) {
        res.status(401).send('No pudo ser cargada')
    }
    const pet = req.body
    pet.img = req.file.path;
    pets.push(pet)
    res.status(201).send(pets);
});

export {petsRouter};
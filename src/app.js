import express from "express";
import { petsRouter} from './routers/pets.router.js';
import { usersRouter} from './routers/users.router.js';
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.listen(8080, ()=>{console.log('escuchando puerto 8080')});
//Min 01:40:00
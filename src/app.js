import express from "express";
import { petsrouter} from './routers/pets.router.js';
import { usersrouter} from './routers/users.router.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/users', usersrouter);
app.use('/api/pets', petsrouter);
app.listen(8080, ()=>{console.log('escuchando puerto 8080')})
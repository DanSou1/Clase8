import { Router } from "express";
const users = [];
const usersRouter = Router();

usersRouter.get('/',(req,res)=>{
    res.send(users);
});

usersRouter.post('/', (req, res)=>{
    const user = req.body
    users.push(user)
    res.status(201).send(users);
});
export { usersRouter}
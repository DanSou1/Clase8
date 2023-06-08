import { Router } from "express";
const users = [];
const userRouter = Router();

userRouter.get('/',(req,res)=>{
    res.send(users);
});

userRouter.post('/', (req, res)=>{
    const user = req.body
    users.push(user)
    res.status(201).send(user);
});
export { usersRouter}
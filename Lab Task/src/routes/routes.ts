import express from 'express'
import { cars, interests, users } from '../model/model'
import idCheck from '../middlewares/idcheck'
const router = express.Router()
// Home Page
router.get('/', (req, res) => {
    res.status(200).json({"Message": "Welcome to our car store"})
})
// Cars stuff
router.route('/cars')
.get((req, res)=> {
    if(cars.length === 0)
    {
        res.status(401).json({"Message": "No existing cars"})
        return
    }
    res.status(200).json(cars)
})
.post((req, res) => {
    const {brand, model, carClass} = req.body;
    if(!brand || !model || !['A', 'B', 'C'].includes(carClass))
    {
        res.status(401).json({"Message": "Invalid car data"})
        return;
    }
    const newCar = {"brand": brand, "model": model, "class": carClass}
    cars.push(newCar)
    res.status(201).json(newCar)
});
router.route('/cars/:id')
.delete(idCheck, (req, res) => {
    const id = parseInt(req.params.id);
    cars.splice(id, 1)
    res.status(200).json({"Message": "Car deleted successfully"})
})
.get(idCheck, (req, res) => {
    const id = parseInt(req.params.id);
    res.status(200).json(cars[id])
})
// User Stuff
router.post('/users', (req, res) => {
    const { name, age } = req.body;
    if(!name || typeof name !== 'string' || !age || typeof age !== 'number')
    {
        res.status(400).json({ message: 'Invalid user data' });
        return;
    }
    const newUser = { name, age };
    users.push(newUser);
    res.status(201).json(newUser);
});
router.route('/users/:id')
.get(idCheck, (req, res) => {
    const id = parseInt(req.params.id);
    res.status(200).json(users[id])
})
.delete(idCheck, (req, res) => {
    const id = parseInt(req.params.id);
    users.splice(id, 1)
    res.status(200).json({"Message": "User deleted successfully"})
})
// User interest stuff
router.post('/intrests',(req, res) => {
    const { user, car } = req.body;
    if(!user  || !car)
    {
        res.status(400).json({ message: 'Invalid intrest data' });
        return;
    }
    const newIntrest = { "user": user, "car": car };
    interests.push(newIntrest);
    res.status(201).json(newIntrest);
})
router.get('/intrests/:id', idCheck, (req, res) => {
    const id = parseInt(req.params.id);
    res.status(200).json(interests[id])
})
// Exporting Module
export default router
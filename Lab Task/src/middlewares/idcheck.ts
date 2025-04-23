import { Request, Response, NextFunction } from "express";
import { cars } from "../model/model";
function idCheck(req: Request, res: Response, next:NextFunction)
{
    const id = parseInt(req.params.id);
    if(id < 0 || id > cars.length)
    {
        res.status(401).json({"Message": "Wrong ID"})
        return
    }
    next()
}
export default idCheck
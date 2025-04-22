import { Request, Response, NextFunction } from "express";

export function validateBook(req: Request, res: Response, next: NextFunction) {
        const { title, author } = req.body;

    if (!title || !author) {
        res.status(400).json({ message: "All fields are required" });
    }
        next();
    
}
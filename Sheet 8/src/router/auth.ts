import express, { Request, Response } from 'express';
import { User } from '../models/user';
import { getUser, userFile } from '../utils/userFile';
import { userValidate } from '../utils/userValidate';
import { validationResult } from 'express-validator';
import path from 'path';

declare module 'express-session' {
    interface SessionData {
        user: {
            id?: number
            username?: string;
            email?: string
        }
    }
}

const router = express.Router();
router.get('/profile', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    res.sendFile(path.join(path.resolve(), 'public', 'profile.html'));
});
router.get('/', (req, res) => {
    if (req.session.user) {
        res.redirect('/profile');
        return;
    }
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'register.html'));
});

router.post('/register', userValidate(), async (req: Request, res: Response) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        res.status(400).send(err.array());
        return;
    }

    const { username, email, password } = req.body;
    const newUser = new User(username, email, password);

    try {
        await userFile('user.json', newUser);
        res.redirect('/login');
    } catch (error) {
        res.status(500).send('Internal server error');
    }
});

router.get('/login', (req: Request, res: Response) => {
    res.sendFile(path.join(path.resolve(), 'public', 'login.html'));
});

router.post('/login', userValidate(), async (req: Request, res: Response) => {
    const {email, password} = req.body
    const user = {email, password}
    const fetchedUser = await getUser(user, 'user.json')
    if(fetchedUser !== null)
    {
        req.session.user = {
            id: fetchedUser.id,
            username: fetchedUser.username,
            email: fetchedUser.email
        };
        res.redirect('/profile')
    } else {
        res.send("Unregister user")
    }
})

router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) return res.status(500).send('Logout failed');
        res.clearCookie('connect.sid');
        res.redirect('/');
    });
});

router.get('/current', (req, res) => {
    if (!req.session.user) {
        res.status(401).json({ error: 'Not authenticated' });
        return;
    }
    res.json(req.session.user);
});
export default router;
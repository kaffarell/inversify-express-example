import express from 'express';

export function root(req: express.Request, res: express.Response) {
    res.send('cool');
}
import express from 'express';

export default interface IService {
    root(req: express.Request, res: express.Response): void;
}
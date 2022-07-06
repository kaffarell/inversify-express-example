import express from 'express';
import { inject, injectable } from 'inversify';
import ILogger from './interfaces/ILogger';
import TYPES from './types';
import IService from './interfaces/IService';


@injectable()
export default class Service implements IService {
    private _logger: ILogger;

    public constructor(
        @inject(TYPES.ILogger) logger: ILogger
    ) {
        console.log('Cool new logger in service')
        this._logger = logger;
        
    }

    public root(req: express.Request, res: express.Response) {
        this._logger.successful('Called root');
        res.send('cool');
    }
}
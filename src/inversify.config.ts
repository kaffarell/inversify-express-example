import "reflect-metadata";
import { Container } from 'inversify';
import TYPES from './types';
import Logger from './logger';
import Service from './service';
import ILogger from './interfaces/ILogger';
import IService from './interfaces/IService';

var container = new Container();

container.bind<ILogger>(TYPES.ILogger).to(Logger);
container.bind<IService>(TYPES.IService).to(Service);

export default container;


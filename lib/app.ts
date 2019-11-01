// lib/app.ts

import * as express from 'express';

import * as mongoose from 'mongoose';

import * as bodyParser from 'body-parser';

import { Routes } from './routes/Routes';
class App {

    public app: express.Application;
    public routelib: Routes = new Routes();
    public mongoUrl: String = 'mongodb://localhost/crudb';

    constructor(){
        this.app = express();
        this.config();
        this.routelib.routes(this.app);
        this.mongoSetup();
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }
    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}
export default new App().app;
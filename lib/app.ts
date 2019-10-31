// lib/app.ts

import * as express from 'express';
import * as bodyParse from 'body-parser';

class App {

    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
    }

    private config(): void{
        this.app.use(bodyParse.json());
        this.app.use(bodyParse.urlencoded({extended: false}));
    }
}

export default new App().app;
# Node-Apis-Typescript

## Learn programming how to build RESTful Web APIs with Node.js, Express, MongoDB and TypeScript
![Node-api-typescript](img/01.jpeg)

## Getting Started

Node and typescript is for web programming languages by practicing step by step with tests and levels. Good for beginners and to test their capabilities in web programming.

make sure that you have download the installer
## Built With

* [NodeJs](https://nodejs.org/en/docs/) - JavaScript runtime built on Chrome's V8 JavaScript engine. 
* [Materialize](http://materializecss.com/getting-started.html) - A modern responsive front-end framework based on Material Design

### Installing and Run

   [Click here to download the installer](https://github.com/savalone47/Node-api-typescritp.git/)
   and download the appropriate version for your operating system then :

```
npm init -y

tsc --init -y

npm install -g typescript ts-node

npm install --save @types/express express body-parser mongoose nodemon

```

```
npm run dev 

npm run prod

ts-node ./lib/server.ts    //Server is running
```

![Node-api-typescript](img/02.jpeg)

`````
// lib/app.ts

import * as express from 'express';

import * as mongoose from 'mongoose';

import * as bodyParser from 'body-parser';

import { Routes } from './routes/Routes';
class App {

    public app: express.Application;
    public routelib: Routes = new Routes();
    public mongoUrl: String = 'mongodb://localhost:27017/Contact';

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
        mongoose.connect(this.mongoUrl,  { useNewUrlParser: true } );
    }
}
export default new App().app;
`````

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

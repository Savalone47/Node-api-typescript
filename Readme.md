# Node-Apis-Typescript

## Learn programming how to build RESTful Web APIs with Node.js, Express, MongoDB and TypeScript
![Node-api-typescript](img/01.jpeg)

## Getting Started

Node and typescript is for web programming languages by practicing step by step with tests and levels. Good for beginners and to test their capabilities in web programming.

## Features

* Typescript
* Express
* REST API
* MongoDB

### Installing and Run

* `git clone https://github.com/savalone47/Node-api-typescritp.git`
* `cd Node-api-typescritp`
* `npm install`
* `npm run dev` 
* optional: include *.env* in your *.gitignore*


![Node-api-typescript](img/02.jpeg)

```
//lib/app.ts

import * as express from "express";
import * as bodyParser from "body-parser";
import { ContactSchema } from "./models/crmModel";
import { ContactController } from "./controllers/crmController";
import { Routes } from "./routes/crmRoutes";
import * as mongoose from "mongoose";

class App {

	public app:express.Application;
	public routePrv: Routes = new Routes();
	public mongoUrl: string = 'mongodb://localhost:27017/CRMdb';
	
	constructor(){
		this.app = express();
		this.config();
		this.routePrv.routes(this.app);
		this.mongoSetup();
	}
	private config():void {
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded(
			{extended: false}
		));
	}
	private mongoSetup():void {
		mongoose.Promise = global.Promise;
		mongoose.connect(this.mongoUrl);
	}
}
export default new App().app;
```

![Node-api-typescript](img/postman.png)

#### Postman

* Install [Postman](https://www.getpostman.com/apps) to interact with REST API
* Create a message with:
  * URL: http://localhost:3000/contact
  * Method: POST
  * Body: x-www-form-urlencoded
  * Body Content: `{ key - value: 'firstName': 'Robert', 'lastName': 'Carlos', 'email': 'Robert@gmail.com', 'phone': '1010101', 'company': 'BinTech' }`
* Delete a message with:
  * URL: http://localhost:3000/contact/5e03c97dbaeefa4f7f830eee
  * Method: DELETE
  
## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details



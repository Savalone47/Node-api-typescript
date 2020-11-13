import * as bodyParser from "body-parser";
import * as express from "express";
import * as mongoose from "mongoose";
import { Routes } from "./routes/crmRoutes";

class App {

	public app     : express.Application;
	public routePrv: Routes = new Routes();
	public mongoUrl: string = 'mongodb://localhost:27017/CRM';
	
	constructor(){
		this.app = express();
		this.config();
		this.routePrv.routes(this.app);
		this.mongoSetup();
	}
	private config():void {
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded(
			{extended: true}
		));
	}
	private mongoSetup():void {
		mongoose.Promise = global.Promise;
		mongoose.connect(this.mongoUrl);
		
		let db = mongoose.connection;
		
		db.on('error', console.error.bind(console, 'connection error: '));
		db.once('open', () => {
			console.log('Mongodb is connected'); 
		});
	}
}
export default new App().app;
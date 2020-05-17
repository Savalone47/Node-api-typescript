import { Request, Response } from "express";

import { ContactController } from "../controllers/crmController";

export class Routes {
	public contactController: ContactController = new ContactController();
	
	public routes(app):void {
		
		app.route('/')
			.get((req: Request, res: Response) => {
			res.status(200).send({message: 'GET request successfull!'});
		});
		app.route('/contact')
			.get(this.contactController.getContacts);
	
		app.route('/contact')
			.post(this.contactController.addNewContact);

		app.route('/contact/:contactId')
			.get(this.contactController.getContactWithID);

		app.route('/contact/:contactId')
			.put(this.contactController.updateContact);

		app.route('/contact/:contactId')
			.delete(this.contactController.deleteContact);
		}
	}